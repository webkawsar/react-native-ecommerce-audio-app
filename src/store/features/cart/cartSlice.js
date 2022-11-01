import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

        addToCart: (state, action) => {

        }

        removeFromCart: (state, action) =>{

        }

        reset: (stae) => state.cart;
    }
})






export default cartSlice.reducer;