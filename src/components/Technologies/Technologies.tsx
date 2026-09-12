import { use } from "react";
import type { Technology } from "../../types/Technology";

export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

export default function Technologies({technologiesPromise}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  return (
    <div>
      {technologies.map((technology) => (
        <div key={technology.name}>{technology.name}</div>
      ))}
    </div>
  );
}
