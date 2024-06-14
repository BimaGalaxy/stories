import { Breadcrumb } from './breadcrumb';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BreadcrumbProps } from './breadcrumb.types';

// This tells Storybook how to list your stories and provide information
export default {
    title: 'Molecule/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        variant: { control: 'select' }
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} as Meta;

// With named export we define component's story
export const Default: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => <Breadcrumb {...args} />;
// Define default arguments for the Default StoryObj
Default.args = {
    variant: 'medium',
    datas: [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Library',
            path: '/library'
        },
        {
            title: 'Data',
            path: '/data'
        }
    ]
};

// Second StoryObj
export const custom: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => (
    <Breadcrumb {...args}>
        <div className='mr-2'>
            <span>/</span>
        </div>
    </Breadcrumb>
);
// Define default arguments for the WithText component and inherit arguments from Default component
custom.args = {
    ...Default.args,
};