"use client";

interface Props {
  value?: number;
}

import { useState } from "react";

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState<number>(value);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all duration-500 w-[100px]"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all duration-500 w-[100px]"
        >
          -1
        </button>
      </div>
    </>
  );
};
