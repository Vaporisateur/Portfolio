import { StarIcon } from '../icons';

interface CardHeaderProps {
  heading: string;
  description: string;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  heading,
  description,
  className = "",
}) => {
  return (
    <div className={`flex flex-col md:px-10 ${className}`}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="font-serif text-3xl">{heading}</h3>
      </div>
      <p className="text-sm text-white/60 my-2 lg:text-base">{description}</p>
    </div>
  );
};
