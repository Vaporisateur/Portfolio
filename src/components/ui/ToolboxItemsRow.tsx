import React, { Fragment } from 'react';
import { ToolIcon } from './ToolIcon';

interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
}

interface ToolboxItemsRowProps {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}

export const ToolboxItemsRow: React.FC<ToolboxItemsRowProps> = ({
  items,
  className = "",
  itemsWrapperClassName = "",
}) => {
  return (
    <div
      className={`flex overflow-hidden ${className}`}
      style={{
        maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
      }}
    >
      <div className={`flex flex-none py-0.5 gap-6 pr-6 ${itemsWrapperClassName}`}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg whitespace-nowrap"
              >
                <ToolIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
