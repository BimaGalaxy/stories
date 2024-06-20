import React from 'react';
import { ToastProps } from './toast.types';
import { InformationCircleIcon, CheckCircleIcon, XIcon, ExclamationCircleIcon, BellIcon } from '@heroicons/react/outline';

export const Toast = ({label = "label", variant = 'default', size = 'medium', message = "message", onClick, color = "default"}: ToastProps) => {

    const icon = variant === 'default' ? <InformationCircleIcon className={`w-6 h-6 ${size === 'large' ? 'w-8 h-8' : ''}`}/> : variant === "success" ? <CheckCircleIcon className={`w-6 h-6 ${size === 'large' ? 'w-8 h-8' : ''}`}/> : variant === "danger" ? <ExclamationCircleIcon className={`w-6 h-6 ${size === 'large' ? 'w-8 h-8' : ''}`}/> : variant === "notification" ? <BellIcon className={`w-6 h-6 ${size === 'large' ? 'w-8 h-8' : ''}`}/> : "";
    const hoverColor = variant === 'success' ? 'hover:bg-green-300' : variant === 'danger' ? 'hover:bg-red-300' : 'hover:bg-gray-300';
    const bgColor = color === 'success' ? 'bg-green-200' : color === 'danger' ? 'bg-red-200' : 'bg-white';

    return (
        <article
            className={[
                "rounded-xl p-4 text-black w-max max-w-[580px] min-h-[100px] border flex gap-2",
                size === 'large' ? 'p-6 max-w-[700px] min-h-[150px]' : '',
                `${bgColor}`,
            ].join(" ")}
        >
            <section className="flex items-center space-x-2">
                <div className="flex items-start space-x-2">
                    <div className={["p-2 rounded-full", `storybook-alert-${variant}`, size === 'large' ? 'p-3' : ''].join(" ")}>
                        {icon}
                    </div>
                    <header>
                        <h1 className={`font-medium ${size === 'large' ? 'text-xl' : 'text-lg'}`}>{label}</h1>
                        <p className={`text-base font-normal ${size === 'large' ? 'text-lg' : ''}`}>{message}</p>
                    </header>
                </div>
                <button onClick={onClick} className={`text-black ${hoverColor} p-0.5 rounded-md -m-1 ${size === 'large' ? 'p-1 -m-1.5' : ''}`}>
                    <XIcon className={`h-6 w-6 ${size === 'large' ? 'h-8 w-8' : ''}`} />
                </button>
            </section>
        </article>
    )
};
