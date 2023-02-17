import {configureStore} from '@reduxjs/toolkit'

import searchValueSlice from './features/searchValueSlice'
import searchSlice from './features/searchSlice'
import sidebarSlice from './features/sidebarSlice'

// const sidebarSlice = createSlice ({
//     name: 'sidebar',
//     initialState: {
//         value: false,
//     },
//     reducers:{
//         changeSidebar: (state) => {
//             state.value = !state.value;
//         }
//     }
// })
// const searchSlide = createSlice ({
//     name: 'search',
//     initialState: {
//         value: false,
//         content: "",
//     },
//     reducers:{
//         changeSearch: (state) => {
//             state.value = !state.value;
//         }
//     }
// })
// const searchValue = createSlice ({
//     name: 'searchValue',
//     initialState: {
//         value: "",
//     },
//     reducers:{
//         changeVal: (state, val) => {
//             state.value = val;
//         }
//     }
// })


const store = configureStore ({
    reducer: {
        sidebar: sidebarSlice.reducer,
        search: searchSlice.reducer,
        searchVal: searchValueSlice.reducer,
    }
})

export const { changeSidebar} = sidebarSlice.actions;
export const { changeSearch} = searchSlice.actions;
export const { changeVal} = searchValueSlice.actions;
export default store; 