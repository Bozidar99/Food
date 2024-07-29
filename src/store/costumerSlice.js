import { createSlice } from "@reduxjs/toolkit"

const costumerSlice = createSlice({
    name: 'costumer',
    initialState: {
        costumer: {}
    },
    reducers: {
        costumerReservationAction: (state, action) => {
            //console.log(action.payload )
            state.costumer = action.payload
            localStorage.setItem('costumer-reservation', JSON.stringify(action.payload))
        }
    }

        
}) 

export const {costumerReservationAction} = costumerSlice.actions
export default costumerSlice.reducer
