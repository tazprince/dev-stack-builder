import { toast } from "react-toastify";
import type { Technology } from "../../types/Technology";

export interface YourStackProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function YourStack({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: YourStackProps) {
  //handle remove of any tech
  const handleRemove = (technology: Technology) => {
    handleRemoveFromStack(technology.id);

    toast.success(`${technology.name} removed from your stack.`);
  };

  //all remove tech
  const handleRemoveAllClick = () => {
    if (stack.length === 0) {
      return;
    }

    handleRemoveAll();

    toast.success("All technologies removed from your stack.");
  };
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm h-fit">
      <div className="mb-4">
        <h3 className="text-sm text-gray-900 font-bold">Your Stack</h3>
        <p className="text-[10px] text-gray-400 mt-1">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology Selected.`}
        </p>
      </div>
      {/* selected tech */}
      <div className="space-y-2">
        {stack.length === 0 ? (
          <p className="border border-dashed border-gray-200 px-3.5 py-5 rounded-r-lg text-center text-[10px] text-gray-400">
            Your stack is empty.
          </p>
        ) : (  //i can also do this 
          stack.map((technology) => (
            <div
              key={technology.id}
              className="flex justify-between items-center rounded border border-gray-200 bg-white px-2 py-2"
            >
              <div className="flex min-w-0 items-center gap-2">
                <img src={technology.icon} className="h-5 w-5 " alt="" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-gray-800">
                    {technology.name}
                  </p>
                  <p className="text-[9px] text-gray-400">Technology</p>
                </div>
              </div>

              {/* Remove any one */}

              <button
                onClick={() => handleRemove(technology)}
                className="ml-2 text-lg text-gray-400 transition hover:text-pink-500"
              >
                <p>×</p>
              </button>
            </div>
          ))
        )}
      </div>
      {/* remove all */}
      <button
        onClick={handleRemoveAllClick}
        disabled={stack.length === 0}
        className="mt-5 w-full rounded-md border border-red-200 py-2 text-[10px] font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </div>
  );
}
