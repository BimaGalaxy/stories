import { HTMLAttributes } from "react";

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  variant: "small" | "medium" | "large";
  datas: {
    title?: string;
    description?: string;
    path?: string;
  }[];
}