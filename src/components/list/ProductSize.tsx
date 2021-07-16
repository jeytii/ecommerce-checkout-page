import React from 'react';

interface Props {
    baseClass: string;
    size: string | number;
}

export default function ProductSize({ baseClass, size }: Props) {
    return (
        <div>
            <select
                className={`${baseClass}__select fluid`}
                name='size'
                id='size'>
                <option value={size}>{size}</option>
            </select>
        </div>
    );
}
