import type { ComponentPropsWithoutRef } from "react";

export const Card = ({ children, className = "", style, ...other }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={`bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/30 after:pointer-events-none p-6 ${className}`}
      style={style}
      {...other}>
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm32 32c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z' fill='%23ffffff' opacity='0.03'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      {children}
    </div>
  );
};
