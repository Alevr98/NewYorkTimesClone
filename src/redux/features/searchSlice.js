import {createSlice} from '@reduxjs/toolkit'
const searchSlide = createSlice ({
    name: 'search',
    initialState: {
        value: false,
        content: "",
    },
    reducers:{
        changeSearch: (state) => {
            state.value = !state.value;
        }
    }
})

export default searchSlide