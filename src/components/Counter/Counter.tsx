import React, { Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { decrement, fetchUserById, increment } from "@/redux/counterSlice";

interface Props {
    increment: any;
    decrement: any;
    count: any;
    users: any;
}

function Counter(props: Props) {
    const dispatch = useDispatch();

    const getData = () => {
        dispatch(fetchUserById(1));
    }
    return (
        <Fragment>
            <div>
                <button onClick={getData}>getData</button>
            </div>
        </Fragment>
    );
}


function mapStateToProps(state: any) {
    console.log(state);
    return {
        count: state.counter.count,
        users: state.counter.users
    };
}

const mapDispatchToProps = {
    increment,
    decrement
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);