import React, { Component } from 'react';
import qs from 'qs';

interface Props {
    location: any;
}

class NewsDetail extends Component<Props> {

    constructor(props) {
        super(props);
    }


    render() {
        const {search} = this.props.location;
        console.log(qs.parse(search.slice(1))); // {'id':1 }
        const params = qs.parse(search.slice(1));
        return (
            <div>
                news {params.id}
            </div>
        );
    }
}

export default NewsDetail;