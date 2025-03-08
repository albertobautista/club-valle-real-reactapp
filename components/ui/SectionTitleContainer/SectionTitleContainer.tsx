import React, { FC } from 'react';

interface SectionTitleContainerProps {
  children: React.ReactNode;
  title: string;
  position?: 'center' | 'left' | 'right';
}

export const SectionTitleContainer: FC<SectionTitleContainerProps> = ({
  children,
  title,
  position = 'left',
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2
          className={`text-3xl tracking-wider text-${position} text-cvr-green`}
        >
          {title}
        </h2>
        <hr className="mb-5 border border-cvr-gold" />
        {children}
      </div>
    </div>
  );
};
