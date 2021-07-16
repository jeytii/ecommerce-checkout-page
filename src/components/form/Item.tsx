import React, { ReactNode } from 'react';

interface Props {
    className: string;
    title: string;
    children: ReactNode;
}

export default function FormItem({ className, title, children }: Props) {
    return (
        <div className={className}>
            <label className='form__label fluid'>{title}:</label>
            {children}
        </div>
    );
}
