import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser= createAsyncThunk(
    "auth/loginUser",
    async (userData) => {
        const result= await fetch("",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        const data= result.json()
        console.log(data)
        return data
    }
)

export const registerUser= createAsyncThunk(
    "auth/registerUser",
    async (userData) => {
        const result= await fetch("",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        
        const data= result.json()
        console.log(data)
        return data
    }
)

const authReducer= createSlice({
    name:"auth",

    initialState:{
        user:null,
        token:null,
        isLoading:false
    },

    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(loginUser.pending, (state)=>{
            state.isLoading+=true
        })

        builder.addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoading +=false
            state.user+= action.payload.user
            state.token+= action.payload.token
        })

        builder.addCase(loginUser.rejected, (state)=>{
            state.isLoading+= false
        })

        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading+=true
        })

        builder.addCase(registerUser.fulfilled , (state,action)=>{
            state.isLoading+=false
            state.user += action.payload.user
            state.token += action.payload.token
        })

        builder.addCase(registerUser.rejected, (state)=>{
            state.isLoading += false
        })
    }
})




export default authReducer.reducer