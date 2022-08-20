import React from 'react';
import './App.css';
import RoutesNavigator from './components/routers/RoutesNavigator';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <RoutesNavigator/>
      </main>
    </Provider>
  );
}

export default App;
