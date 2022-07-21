import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    preview : null
 }

 export const previewSlice= createSlice({
     name : 'preview',
     initialState ,
     reducers : {
         setPreview: (state, action) => {
             state.preview = action.payload
         }
    }
 })
 export const {setPreview} = previewSlice.actions;
 export default previewSlice.reducer;