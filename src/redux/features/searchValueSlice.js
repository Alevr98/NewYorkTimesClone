import {createSlice} from '@reduxjs/toolkit'
const searchValue = createSlice ({
    name: 'searchValue',
    initialState: {
        value: "",
    },
    reducers:{
        changeVal: (state, val) => {
            state.value = val;
        }
    }
})

export default searchValue