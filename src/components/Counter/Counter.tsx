import React, { Component } from 'react';
import { createAddAction, createMinusAction } from "@/redux/counter_action";
import { connect } from "react-redux";

interface Props {
    add: any;
    minus: any;
    counter: number;
}
class Counter extends Component<Props> {
    render() {
        const {counter,add,minus} = this.props;
        return (
            <div>
                {counter}
                <div><button onClick={add}>add</button></div>
                <div><button onClick={minus}>minus</button></div>
            </div>
        );
    }
}
function mapStateToProps(state: any) {
    return {counter: state.counter};
}
const mapDispatchToProps = {
    add: createAddAction,
    minus: createMinusAction,
}
// 创建并暴露一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter);