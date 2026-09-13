import { toast } from "react-toastify";
import type { Technology } from "../../types/Technology";

export interface TechnologyCardProps {
  technology: Technology;
  stack: Technology[];
  handleAddToStack: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  stack,
  handleAddToStack,
}: TechnologyCardProps) {

  const alreadyAdded = stack.some((item) => item.id === technology.id);

  const handleAdd = () => {
    if (alreadyAdded) {
      //Toast
      toast.error(`${technology.name} is already in your stack!`);
      return;
    }

    handleAddToStack(technology);

    toast.success(`${technology.name} added to your stack!`);
  };
  return (
    <div className=" flex  flex-col rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-8 w-8 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-8"
          />
        </div>

        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Technology name */}
      <h3 className="mt-2 font-bold text-gray-900 text-[15px]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-[11px] text-gray-500">{technology.description}</p>

      {/* Bottom content */}
      <div className="mt-7.5">
        {/* Category + Level + Rating */}
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] text-gray-500">
            {technology.category}
          </span>

          <span className="text-[9.5px] text-gray-500">
            {technology.difficulty}
          </span>

          <span className="text-[9.5px] font-medium text-gray-700">
            ⭐ {technology.rating}
          </span>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          disabled={alreadyAdded}
          className={`mt-3 w-full rounded-md py-2 text-[9px] font-medium transition ${
            alreadyAdded
              ? "cursor-not-allowed bg-green-50 text-pink-500"
              : "bg-[#080D1A] text-white hover:bg-gray-800"
          }`}
        >
          {alreadyAdded
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
