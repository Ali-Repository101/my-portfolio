"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMoon, FiSun, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { useIsClient } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

const DESKTOP_QUERY = "(min-width: 1024px)";

// The active theme is only known in the browser, so the icon is deferred
// until mount; the button itself always renders (keeps layout stable).
const ThemeIcon = ({ isDark, isClient }) => {
  if (!isClient) return <span className="block size-4" aria-hidden="true" />;
  return isDark ? <FiSun className="size-4" aria-hidden="true" /> : <FiMoon className="size-4" aria-hidden="true" />;
};

/** Tracks which section sits in the middle band of the viewport (scroll-spy). */
const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const sectionIds = navLinks.map((link) => link.id);

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const activeSection = useActiveSection(sectionIds);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const themeLabel = isClient
    ? `Switch to ${isDark ? "light" : "dark"} mode`
    : "Toggle color theme";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus(); // don't strand focus inside the closed menu
      }
    };
    // Close the mobile menu if the viewport grows into the desktop layout
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const handleDesktop = (e) => e.matches && setMenuOpen(false);
    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        menuOpen
          ? "border-border bg-background"
          : scrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-background"
      )}
    >
      <Container>
        <nav
          aria-label="Main"
          className="grid h-16 grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]"
        >
          {/* Wordmark */}
          <Link
            href="/#home"
            className="flex items-center gap-2.5 justify-self-start rounded-md"
          >
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-md bg-foreground font-mono text-[13px] font-semibold tracking-tight text-background"
            >
              AA
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              Arshad Ali
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {/* Active indicator sits on the header's bottom edge; no layout impact */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-[15px] h-px bg-foreground transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1 justify-self-end">
            {/* Theme Toggle (all breakpoints) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
            >
              <ThemeIcon isDark={isDark} isClient={isClient} />
            </button>

            <span aria-hidden="true" className="mx-2 hidden h-5 w-px bg-border lg:block" />

            <a
              href={siteConfig.resume}
              download
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hidden lg:inline-flex")}
            >
              <FiDownload className="size-4" aria-hidden="true" />
              Resume
            </a>

            <a
              href={siteConfig.links.email}
              className={cn(buttonVariants({ variant: "primary", size: "sm" }), "ml-1 hidden lg:inline-flex")}
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "-mr-2 lg:hidden")}
            >
              {menuOpen ? <FiX className="size-5" aria-hidden="true" /> : <FiMenu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="border-t border-border lg:hidden"
          >
            <Container className="pt-2 pb-5">
              <ul className="flex flex-col">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.href} className="border-b border-border last:border-b-0">
                      <Link
                        href={link.href}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-center justify-between py-3.5 text-base font-medium transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                        {isActive && <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.resume}
                  download
                  className={buttonVariants({ variant: "secondary", size: "md" })}
                >
                  <FiDownload className="size-4" aria-hidden="true" />
                  Resume
                </a>
                <a
                  href={siteConfig.links.email}
                  className={buttonVariants({ variant: "primary", size: "md" })}
                >
                  Hire Me
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
