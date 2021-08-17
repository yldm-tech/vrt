import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { decrement, fetchUserById, increment } from '@/redux/counterSlice';

interface Props {
    increment: Function;
    decrement: Function;
    count: number;
    users: [];
    loading: boolean;
}

function Counter(props: Props) {
    const dispatch = useDispatch();

    const getData = () => {
        dispatch(fetchUserById(1));
    };
    return (
        <>
            <div>
                {props.users.map((user: any) => (
                    <ul key={user.id}>
                        <li>{user.id}</li>
                        <li>{user.email}</li>
                        <li>{user.first_name}</li>
                        <li>{user.last_name}</li>
                        <img alt="" src={user.avatar}/>
                    </ul>
                ))}
                <button onClick={getData}>getData</button>
            </div>
        </>
    );
}

function mapStateToProps(state: any) {
    console.log(state);
    return {
        count: state.counter.count,
        users: state.counter.users,
        loading: state.counter.loading,
    };
}

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
