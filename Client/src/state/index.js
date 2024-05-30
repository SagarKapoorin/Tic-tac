import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  game_data: [{
    scoreX:1,
    scoreY:1,
    gameno:4,
  },
  {
    scoreX:0,
    scoreY:1,
    gameno:4,
  },
  {
    scoreX:2,
    scoreY:1,
    gameno:4,
  }
],
  CscoreX:0,
  CscoreY:0,
  Cgameno:0

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
   setScoreX:(state)=>{
    state.CscoreX=state.CscoreX+1;
   },
   setScoreY:(state)=>{
    state.CscoreY=state.CscoreY+1;
   },
   setnewGame:(state,action)=>{
        console.log(action.payload.game_data)
        const newArray=[...state.game_data,action.payload.game_data];
        console.log(state.game_data);
        state.game_data=newArray;
        state.CscoreX=0;
        state.Cgameno=0;
        state.CscoreY=0;
   },
   setGame:(state)=>{
    state.Cgameno=state.Cgameno+1;
   }
  },
  
});

export const { setMode, setScoreX,setScoreY,setnewGame , setGame } =
  authSlice.actions;
export default authSlice.reducer;