import React, { Component } from 'react';

interface Props {
    match: any;
}


class MessageDetail extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.match.params);
        const {id} = this.props.match.params;
        return (
            <div>
                id: {id}
            </div>
        );
    }
}

export default MessageDetail;