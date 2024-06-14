import { HTMLAttributes } from "react";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    variant: 'default' | 'success' | 'danger' | 'notification';
    size: 'medium' | 'large';
    label?: string;
    message?: string;
}