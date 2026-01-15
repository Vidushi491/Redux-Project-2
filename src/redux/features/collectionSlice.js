import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    item:JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            const alreadyExists = state.item.find(
                item => item.id === action.payload.id
            )
                if(!alreadyExists){
                    state.item.push(action.payload);
                     localStorage.setItem('collection',JSON.stringify(state.items)) 
                }
            },
        removeCollection: (state, action) =>{
                state.item = state.item.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.item))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast
    }
})
export const {
    addCollection,
    removeCollection,
    clearCollection
} = collectionSlice.actions;

export default collectionSlice.reducer;