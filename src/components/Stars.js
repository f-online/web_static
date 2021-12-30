import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export default function Stars({
  value, max = 5, size = 25, className,
}) {
  const fullStars = new Array(value).fill(0);
  const emptyStars = new Array(max - value).fill(0);

  return (
    <span className={`inline-flex text-fonline-500 ${className}`}>
      {fullStars.map(() => (
        <AiFillStar size={size} />
      ))}
      {emptyStars.map(() => (
        <AiOutlineStar size={size} />
      ))}
    </span>
  );
}
