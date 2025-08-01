import { StarIcon } from "../icons";

export const TapeSection = () => {
  const words = [
    "Responsive",
    "Utilisable",
    "Fiable",
    "Optimisé",
    "Performant",
    "Accessible",
    "Sécurisé",
    "Interactif",
    "Scalable",
    "Maintenable"
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left">
            <div className="flex flex-none gap-4 pr-4">
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-4 text-gray-900 -rotate-12" />
                </div>
              ))}
            </div>
            <div className="flex flex-none gap-4 pr-4">
              {words.map((word) => (
                <div key={`${word}-2`} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-4 text-gray-900 -rotate-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
