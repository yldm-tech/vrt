import { Add, Minus } from "@/redux/constant";

const initializeState = {
    counter: 0
}

function counterReducer(state = initializeState, action: any) {
    const {type, data} = action;
    console.log(state);
    switch (type) {
        case Add:
            return state.counter + data;
        case Minus:
            return state.counter - data;
        default:
            break;
    }
}

export default counterReducer;