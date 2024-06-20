import { HTMLAttributes } from "react";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    variant: 'default' | 'success' | 'danger' | 'notification';
    size: 'medium' | 'large';
    color: 'success' | 'danger' | 'default';
    onClick?: () => void;
    label?: string;
    message?: string;
}