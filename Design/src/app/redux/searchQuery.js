const { createSlice } = require("@reduxjs/toolkit");

export const searchQueryReducer = createSlice({
    name:'searchQuery',
    initialState:'',
    reducers:{
        setSearchQuery:(state,action)=>{
            return action.payload
        }
    }
})

export const {setSearchQuery} = searchQueryReducer.actions
export default searchQueryReducer.reducer