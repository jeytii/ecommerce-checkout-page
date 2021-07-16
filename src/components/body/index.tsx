import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function Body({ children }: Props) {
    return <section className='body flex--stretch'>{children}</section>;
}
