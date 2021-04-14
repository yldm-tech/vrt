import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, minus } from "@/redux/counter_action";

interface Props {
    add: any;
    minus: any;
    count: any;
}

class Counter extends Component<Props> {
    render() {
        const {count, add, minus} = this.props;
        return (
            <div>
                当前求和为：{count}
                <div>
                    <button onClick={() => add(1)}
                    >add
                    </button>
                </div>
                <div>
                    <button onClick={() => minus(1)}>minus</button>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state: any) {
    console.log(JSON.stringify(state));
    return {count: state.count};
}

const mapDispatchToProps = {
    add,
    minus,
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);