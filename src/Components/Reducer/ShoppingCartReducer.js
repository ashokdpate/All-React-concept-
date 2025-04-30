const ShoppingCartReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem=state.find(item=>item.name===action.payload);
            if (existingItem) {
                return state.map(item=>
                    item.name===action.payload?{...item,quantity:item.quantity+1}:item
                );
            }else{
                return[...state,{id:Date.now(),name:action.payload,quantity:1}];
            }
            
        case 'INCREASE_QUANTITY':
            return state.map(item=>
                item.id===action.payload?{...item,quantity:item.quantity+1}:item
            );
            
        case 'DECREASE_QUANTITY':
            return state.map(item=>
                item.id===action.payload?{...item,quantity:item.quantity>1 ?item.quantity-1:1}:item
            );
            
        case 'REMOVE_FROM_CART':
                return state.filter(item=>item.id!==action.payload);
        case 'CLEAR_CART':
            return [];
            
    
        default:
            return state;
    }
}
export default ShoppingCartReducer;