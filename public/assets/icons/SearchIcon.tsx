import React from 'react';

interface SearchIconProps {
  color?: string;
  className?: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ color, className }) => {
  return (
    <svg
      width={30}
      height={30}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill={color ? color : 'none'}
      stroke="white"
      strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};
