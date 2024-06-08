import React, { FC } from 'react';
import { InformationCircleIcon, BellIcon, XIcon } from '@heroicons/react/outline';

export interface ToastProps {
    type: 'information' | 'notification';
    variant: 'default' | 'success' | 'danger';
    size: 'medium' | 'large';
    message?: string;
}

export const Toast: FC<ToastProps> = ({ type, variant = 'default', size = 'medium', message = "message" }) => {
    const icon = type === 'information' ? <InformationCircleIcon className="w-6 h-6" /> : <BellIcon className="w-6 h-6" />;
    const bgColor = variant === 'success' ? 'bg-green-200' : variant === 'danger' ? 'bg-red-200' : 'bg-white';
    const hoverColor = variant === 'success' ? 'hover:bg-green-300' : variant === 'danger' ? 'hover:bg-red-300' : 'hover:bg-gray-300';
    const borderColor = variant === 'default' ? 'border-gray-300' : variant === 'success' ? 'border-green-500' : 'border-red-500';
    const textColor = variant === 'danger' ? 'text-red-900' : 'text-green-900';

    const getWidthClass = size === 'large' ? 'w-6/12' : 'w-96'; // Adjust width based on size
    const getHeightClass = size === 'large' ? 'h-20' : 'h-20'; // Adjust height based on size
    const getIconSize = size === 'large' ? 'h-8 w-8' : 'h-6 w-6'; // Adjust icon size based on size

    return (
        <div className={`flex p-4 rounded-md space-x-3 ${getWidthClass} ${bgColor} ${textColor} ${getHeightClass} border ${borderColor}`}>
            <div className="shrink-0">{icon}</div>
            <div className="flex-auto space-y-1">
                <h2 className='font-medium'>{type === 'information' ? 'Information' : 'Notification'} Message</h2>
                <div>{message}</div>
            </div>
            <div className="shrink-0">
                <button className={`text-green-900/70 ${hoverColor} p-0.5 rounded-md -m-1`}>
                    <XIcon className={`h-6 w-6 ${size === 'large' ? 'h-8 w-8' : ''}`} />
                </button>
            </div>
        </div>
    );
};
