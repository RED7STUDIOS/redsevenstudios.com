import { cn } from "@/lib/utils";
import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: any;
  note?: string;
  className?: string;
}

export const Service: React.FC<ServiceProps> = (props) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-lg p-6 shadow-sm transition-color bg-card",
        props.className
      )}
    >
      <props.icon className="h-10 w-10 text-primary" />
      <h3 className="text-lg font-bold text-primary">{props.title}</h3>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {props.description}
      </p>
      {props.note && (
        <small className="italic text-gray-500 dark:text-gray-400">
          {props.note}
        </small>
      )}
    </div>
  );
};
