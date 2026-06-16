import {createSlice} from "@reduxjs/toolkit";
import { LetterType } from "@/components/Letter/LetterType";
interface LetterState {
    letter: LetterType | null,
    letters: LetterType[],
    error:null|string,
    showLetter:boolean;
}
const initialState:LetterState = {
    letter:null,
    letters:[],
    error:null,
    showLetter: false
}
const letterSlice = createSlice({
    name: "letter",
    initialState,
    reducers: {
        setLetter: (state, action) => {
            state.letter = action.payload
        },
        setLetters:(state, action) =>{
            state.letters = action.payload
        },
        updateLetter(state, action) {
             state.letter={ ...state, ...action.payload };
          },
          setShowLetter(state, action){
                state.showLetter = action.payload
          }
    }
})

export const {setLetter,updateLetter, setLetters, setShowLetter} = letterSlice.actions
export default letterSlice.reducer