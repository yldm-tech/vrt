import React from 'react';

interface Props {
    location: Location;
}

interface Location {
    id: string;
    title: string;
}

const PostsDetail = (props: Props): JSX.Element => {
	const {id, title} = props.location || {};
	return (
		<div>
			{id}-{title}
		</div>
	);
};

export default PostsDetail;
