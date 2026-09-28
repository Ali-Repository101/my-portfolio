import { useSyncExternalStore } from "react";
import AOS from "aos";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;

const subscribeToReducedMotion = (callback) => {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
};

/** True when the user asked the OS for reduced motion. Always false during SSR/hydration. */
export const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribeToReducedMotion, prefersReducedMotion, () => false);

const noopSubscribe = () => () => {};

/** True once rendering on the client — use to defer output that can't match the server HTML. */
export const useIsClient = () =>
  useSyncExternalStore(noopSubscribe, () => true, () => false);

/** AOS.init that turns scroll animations off for users who prefer reduced motion. */
export const initAOS = (options) => {
  AOS.init({ ...options, disable: prefersReducedMotion });
};
