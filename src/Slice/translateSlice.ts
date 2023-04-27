import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { English } from '../languages/en'
import { RootState } from '../store'

export interface translateState {
  mode: any,
  languagemodel: any
}

const initialState: translateState = {
  mode: "en",
  languagemodel: English
}

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    Translatechangemode: (state, action:PayloadAction<string>) =>{
        state.mode = action
    },
  },
})

// Action creators are generated for each case reducer function
export const { Translatechangemode } = translateSlice.actions

export const Languagemodel = (state:RootState) => state.translate.languagemodel

export default translateSlice.reducer