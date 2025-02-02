import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: [],
    },
    reducers:{
        addFavorite: (state, action)=>{
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        },
    }
});
export const addFavorite= favouriteSlice.actions.addFavorite;
export const removeFavorite= favouriteSlice.actions.removeFavorite;
export default favouriteSlice.reducer;