import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { English } from '../languages/en'
import { French } from '../languages/fr'
import { German } from '../languages/de'
import { Spain } from '../languages/es'
import { Arabic } from '../languages/ar'
import { Potugues } from '../languages/pt'
import { RootState } from '../store'
const detectBrowserLanguage = require('detect-browser-language')

const languageDetection = window.navigator.language

console.log("dection Module >>>>", detectBrowserLanguage())
const deteclanguage = detectBrowserLanguage()
let defaultLanguage = "en"
let Init_Languagemodel = English
console.log(typeof defaultLanguage)
if(deteclanguage.search("en") >= 0){
  defaultLanguage = "en"
  console.log("ssssvvv")
}
else if(deteclanguage.search("fr") >=0){
  defaultLanguage = "fr"
  Init_Languagemodel = French
}
else if(deteclanguage.search("de") >=0){
  defaultLanguage = "de"
  Init_Languagemodel = German
}
else if(deteclanguage.search("es") >=0){
  defaultLanguage = "es"
  Init_Languagemodel = Spain
}
else if(deteclanguage.search("pt") >=0){
  defaultLanguage = "pt"
  Init_Languagemodel = Potugues
}
else if(deteclanguage.search("ar") >=0){
  defaultLanguage = "ar"
  Init_Languagemodel = Arabic
}

export interface translateState {
  mode: any,
  languagemodel: any
}

const initialState: translateState = {
  mode: defaultLanguage,
  languagemodel: Init_Languagemodel,
}




export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    Translatechangemode: (state, action:PayloadAction<string>) =>{
        state.mode = action.payload
        if(action.payload === "en"){
          state.languagemodel = English
        }
        else if(action.payload === "fr")
        {
          state.languagemodel = French
        }
        else if(action.payload === 'de'){
            state.languagemodel = German
        }
        else if(action.payload === 'es'){
          state.languagemodel = Spain
        }
        else if(action.payload === 'ar'){
          state.languagemodel = Arabic
        }
        else if(action.payload === 'pt'){
          state.languagemodel = Potugues
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { Translatechangemode } = translateSlice.actions

export const Languagemodel = (state:RootState) => state.translate.languagemodel

export default translateSlice.reducer