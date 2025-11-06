'use client';
import {
  FaLaptopCode,
} from "react-icons/fa";

const TimelineCard = ({ year, title, university, subjects = [], tech }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary dark:bg-secondary animate-pulse"></div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200/30 dark:border-gray-700/50 hover:border-primary/50 hover:dark:border-secondary/50 transition">
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary mb-3">
        {year}
      </span>
      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <FaLaptopCode /> {title}
      </h4>
      <p className="text-gray-500 dark:text-gray-400 mb-3 font-medium">{university}</p>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
        {subjects.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {tech && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600 flex items-center gap-1"
            >
              {t.icon} {t.name}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default TimelineCard;