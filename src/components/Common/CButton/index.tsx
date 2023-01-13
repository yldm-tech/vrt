import React from 'react';

export interface CButtonProps {
    children: string;
    classes?: string;
    click?: () => void;
}

export const CButton = (props: CButtonProps): JSX.Element => {
    return <button
        onClick={props.click}
    className={props.classes}>
        {props.children}
        </button>;
};