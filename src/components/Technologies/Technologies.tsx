import { use } from "react";
import type { Technology } from "../../types/Technology";
import TechnologyGrid from "./TechnologyGrid";

export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

export default function Technologies({technologiesPromise}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Explore the{" "}
          <span className="text-[#EC4899]">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid + Your Stack */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_165px]">
        
        <TechnologyGrid
          technologies={technologies}
        />

      </div>
    </section>
  );
}
