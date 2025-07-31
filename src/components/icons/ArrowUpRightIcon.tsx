interface ArrowUpRightIconProps {
  className?: string;
}

export const ArrowUpRightIcon = ({ className = "w-6 h-6" }: ArrowUpRightIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17L17 7" />
    </svg>
  );
};
