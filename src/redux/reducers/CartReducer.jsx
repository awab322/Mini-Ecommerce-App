const cart=[];

const CartReducer = (state=cart,action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADD_ITEM":
            const ifAlreadyExist = state.find((x)=> x.id === product.id)    
            if(ifAlreadyExist)
            {
                return state.map((x)=>
                x.id===product.id ? {...x , qty:x.qty + 1 } : x
                )
            }else{
                const product=action.payload;
                return [
                    ...state,
                    {
                        ...product,qty:1
                    }
                ]
            }
            break;
        case "REMOVE_ITEM":
        const exist = state.find((x)=> x.id === product.id) 
        if(exist.qty===1)
        {
            return state.filter((x)=> x.id !== exist.id)
        }else{
            return state.map((x)=>
            x.id===product.id ? {...x , qty:x.qty-1} : x
            )
        }
            break;
    
        default:
            return state
            break;
    }


}

export default CartReducer;
