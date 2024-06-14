import React, { FC } from 'react';
import { BreadcrumbProps } from './breadcrumb.types';
import {HomeIcon} from '@heroicons/react/outline';

export const Breadcrumb: FC<BreadcrumbProps> = ({ children, variant = 'medium', datas, ...rest }) => {
    const sizeClass = variant === 'small' ? 'md:text-sm' : variant === 'medium' ? 'text-base' : 'text-xl';

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {datas.map((data, index) => (
                    <li key={index} className="inline-flex items-center">
                        <a href="#" className={`${sizeClass} inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white`}>
                            {index === 0 ? (
                                <HomeIcon className={`w-5 h-5 me-2.5 text-blue-600 ${sizeClass}`} aria-hidden="true"/>
                            ) : children ?? (
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            )}
                            <p className={`truncate ${datas.length - 1 > index ? 'text-blue-600' : ''}`}>{data.title}</p>
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    )
}