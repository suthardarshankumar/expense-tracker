import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-neutral-50 min-h-screen">
        <Navbar />
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
