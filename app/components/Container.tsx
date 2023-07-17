"use client";

import { FC } from "react";

interface containerProps {
  children: React.ReactNode;
}

const Container: FC<containerProps> = ({ children }) => {
  return (
    <div
      className="
  max-w-[2520px]
  mx-auto
  lg:px-20
  md:px-10
  sm:px-2
  px-4
  "
    >
      {children}
    </div>
  );
};

export default Container;
