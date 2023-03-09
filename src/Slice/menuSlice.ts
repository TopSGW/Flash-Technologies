import { createSlice } from '@reduxjs/toolkit'

export interface menuState {
  menu_state: boolean 
}

const initialState: menuState = {
  menu_state: false,
}

export const menuSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeState: (state) =>{
        state.menu_state = !state.menu_state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeState } = menuSlice.actions

export default menuSlice.reducer