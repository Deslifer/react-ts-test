import {createSlice} from '@reduxjs/toolkit';

interface IContactsData {
    id: string | null,
    userUID: string,
    name: string,
    number: string,
  }


export const data = createSlice({
  name: 'data',
  initialState: {
    
    value: [],
    loading: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.value = action.payload.map((item:IContactsData) => {
        return {
          id: item.id,
          userUID: item.userUID,
          name: item.name,
          number: item.number,
        };
      });
    },
  },
});

export const {setItems} = data.actions;

export default data.reducer;
