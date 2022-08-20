import { configureStore } from '@reduxjs/toolkit';
import ContactsData from './ContactsData';

const store = configureStore({
  reducer: {
    data: ContactsData.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
