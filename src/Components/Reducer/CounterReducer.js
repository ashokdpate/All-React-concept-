
const reducerFn=(state,action)=>{

    switch (action.type) {
        case 'increment':
            return {count: state.count+1};
            break;
        case 'decrement':
            return {count: state.count-1};
            break;
        case 'clear':
            return {count:0}
            break; 
        default:         
            return state;
    }
}
export default reducerFn;