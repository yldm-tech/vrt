import React from 'react';
import {
    borderRadius,
    borders,
    classnames,
    display,
    fontSize,
    padding,
    textDecoration,
    TTailwind
} from 'tailwindcss-classnames';

export interface CLinkProps {
    children: string;
    classes?: TTailwind;
    url: string;
    hasBorder: boolean;
    newWindow: boolean;
}

export const CLink = (props: CLinkProps): JSX.Element => {
    const borderClasses = classnames(
        display('flex'),
        borders('border', 'border-solid', 'border-gray-300')
    );
    let classes = classnames(
        borderRadius('rounded-2xl'),
        padding('px-2', 'py-1.5'),
        textDecoration('no-underline'),
        fontSize('text-sm')
    );
    if (props.hasBorder) {
        classes = classnames(borderClasses, classes);
    }
    return <a
        href={props.url}
        target={props.newWindow ? '_blank' : '_self'}
        className={classes} rel="noreferrer">
        {props.children}
    </a>;
};

CLink.defaultProps = {
    newWindow: true,
    hasBorder: false
};