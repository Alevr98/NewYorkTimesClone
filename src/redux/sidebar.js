import {createSlice, configureStore} from '@reduxjs/toolkit'

const sidebarSlice = createSlice ({
    name: 'sidebar',
    initialState: {
        value: false,
    },
    reducers:{
        changeSidebar: (state) => {
            state.value = !state.value;
        }
    }
})
const searchSlide = createSlice ({
    name: 'search',
    initialState: {
        value: false,
    },
    reducers:{
        changeSearch: (state) => {
            state.value = !state.value;
        }
    }
})


const store = configureStore ({
    reducer: {
        sidebar: sidebarSlice.reducer,
        search: searchSlide.reducer,
    }
})

export const { changeSidebar} = sidebarSlice.actions;
export const { changeSearch} = searchSlide.actions;

export default store; 