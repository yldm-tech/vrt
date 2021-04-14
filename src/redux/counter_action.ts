// 专门为counter生成action对象

import { Add, Minus } from "@/redux/constant";
import store from "@/redux/store";
import { ThunkDispatch } from "redux-thunk";

const createAddAction = (data: number) => ({type: Add, data})

const createMinusAction = (data: number) => ({type: Minus, data})

// 异步action中会调用同步action,异步action不是必须要用的
// 为什么要用异步action，因为要从网络获取数据，拿到数据之后再调用同步action做处理
const createAsyncAddAction = (data: number, time: number) => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        setTimeout(() => {
            dispatch(createAddAction(data))
        }, time)
    };
}

const createAsyncMinusAction = (data: number, time: number) => {
    return (dispatch: ThunkDispatch<any, any, any>) => {
        setTimeout(() => {
            dispatch(createMinusAction(data))
        }, time)
    };
}

export {
    createAddAction, createMinusAction
}