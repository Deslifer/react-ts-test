import {configureStore} from '@reduxjs/toolkit';
import data from './ContactsData';

const store = configureStore({
  reducer: {
    data: data,
  },
});

export type RootState = ReturnType<typeof store.getState>;
  
export default store;