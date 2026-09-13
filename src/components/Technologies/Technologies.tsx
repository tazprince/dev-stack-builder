import { use } from "react";
import type { Technology } from "../../types/Technology";
import TechnologyGrid from "./TechnologyGrid";
import YourStack from "./YourStack";

export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
  stack: Technology[];
  handleAddToStack: (technology: Technology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function Technologies({
  technologiesPromise,
  stack,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="pb-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid + Your Stack */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_165px]">
        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          handleAddToStack={handleAddToStack}
        />
         <YourStack
          stack={stack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
}
