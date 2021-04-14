import { Add, Minus } from "@/redux/constant";

const initializeState = {
    count: 0
}

function counterReducer(state = initializeState, action: any) {
    const {type, payload} = action;
    console.log(state);
    switch (type) {
        case Add:
            return {...state, count: state.count + payload};
        case Minus:
            return {...state, count: state.count - payload};
        default:
            return state;
    }
}

export default counterReducer;