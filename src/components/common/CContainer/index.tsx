import React from 'react';
import { CPartialLoading } from '@/components/common/CLoading';

interface ContainerProps {
	loading: boolean;
	classes?: string[];
	component: JSX.Element;

}

export const CContainer = (props: ContainerProps): JSX.Element => {
	return props.loading ? <CPartialLoading classes={props.classes}/> : props.component;
};