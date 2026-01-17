import type { ReactNode } from "react";
import { BackButton } from "./BackButton";

export const StickyTopBar = ({children} : {children: ReactNode}) => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <BackButton url="/" />
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-content flex-shrink-0">
            {children}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>
    </div>
  );
};
