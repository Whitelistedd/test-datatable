import React from 'react';

interface ArrowIconProps {
  color?: string;
  sortType: string;
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ color, sortType, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={color ? color : 'none'}
      width={15.66}
      viewBox="0 0 24 24"
      transform={`rotate(${sortType === 'ASC' ? '180' : '0'})`}
      stroke="currentColor"
      strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};
