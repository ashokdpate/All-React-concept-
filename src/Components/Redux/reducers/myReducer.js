const initialData={
    name:"",
    products:[],
}
const myReducer=(state=initialData,action)=>{
        if(action.type==="NAME"){
            state={
                name:action.nameComp,
            };
        } else if (action.type==="PRODUCTS") {
            state={
                ...state,
                products:action.payload,
            }
        }

        return state;
}

export default myReducer;