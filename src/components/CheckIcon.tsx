interface CheckIconProps {
  className?: string;
}

export const CheckIcon = ({ className = "w-6 h-6" }: CheckIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
};
