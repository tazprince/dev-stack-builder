import type { Technology } from "../../types/Technology"
import TechnologyCard from "./TechnologyCard";

export interface TechnologyGridProps {
    technologies: Technology[];
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
    
    return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
}