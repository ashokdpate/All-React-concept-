const initialData={
    isLoggedIn:true,
};

const loginReducer=(state=initialData,action)=>{
    switch (action.type) {
        case "LOGOUT":
            state={
                isLoggedIn:action.payload,
            }
        case "LOGIN":
            state={
                isLoggedIn:action.payload,
            }
    }
    return state;
};

export default loginReducer;