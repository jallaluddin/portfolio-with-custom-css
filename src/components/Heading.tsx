import React from 'react';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="text-center pb-8">
      {/* Use different font sizes based on screen size */}
      <p className="border-b-4 inline-block pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </p>
    </div>
  );
};

export default Heading;
