import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="sticky top-0 z-0 h-[60vh] flex items-center justify-center pointer-events-none opacity-50">
      <h2 className="text-[15vw] leading-none font-display font-bold uppercase text-white tracking-tighter opacity-20 select-none">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
