import {createSlice} from '@reduxjs/toolkit'

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

export default sidebarSlice