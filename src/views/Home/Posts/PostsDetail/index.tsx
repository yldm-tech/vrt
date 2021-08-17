import React, { Component } from 'react';

interface Props {
    location: any;
}

class PostsDetail extends Component<Props> {

    constructor(props) {
        super(props);
    }


    render() {
        const {id, title} = this.props.location.state || {};
        return (
            <div>
                {id}-{title}
            </div>
        );
    }
}

export default PostsDetail;