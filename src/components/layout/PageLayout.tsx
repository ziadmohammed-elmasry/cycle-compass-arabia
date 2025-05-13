
import React from "react";
import BottomNavigation from "./BottomNavigation";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  hideNavigation?: boolean;
  title?: string;
};

const PageLayout = ({ children, className, hideNavigation = false, title }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {title && (
        <div className="bg-white p-4 shadow-sm">
          <h1 className="text-xl font-bold text-center">{title}</h1>
        </div>
      )}
      <main
        className={cn(
          "px-4 py-5 pb-20",
          {
            "pb-0": hideNavigation,
          },
          className
        )}
      >
        {children}
      </main>
      {!hideNavigation && <BottomNavigation />}
    </div>
  );
};

export default PageLayout;
