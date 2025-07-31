interface SparkleIconProps {
  className?: string;
}

export const SparkleIcon = ({ className = "w-6 h-6" }: SparkleIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0l2.4 7.2H22l-6.2 4.8L18.4 24 12 19.2 5.6 24l2.6-12-6.2-4.8h7.6L12 0z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};
