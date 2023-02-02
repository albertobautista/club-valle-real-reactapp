import React from 'react';

export const MenuIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-cvr-green first"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h8m-8 6h16"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden w-8 h-8 text-cvr-gold last"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </>
  );
};
