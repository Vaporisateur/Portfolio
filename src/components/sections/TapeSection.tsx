import { StarIcon } from "../icons";
import { Fragment } from "react";

export const TapeSection = () => {
  const words = [
    "Performant",
    "Accessible",
    "Sécurisé",
    "Interactif",
    "Scalable",
    "Maintenable",
    "Responsive",
    "Utilisable",
    "Fiable",
    "Optimisé"
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 py-3 -rotate-3 -mx-1">
        <div
          className="flex"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="flex flex-none gap-4 pr-4 animate-scroll-left [animation-duration:15s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 font-extrabold uppercase text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
