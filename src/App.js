import React, { useEffect } from 'react';

import './App.css';

// import materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Fragment } from 'react/cjs/react.production.min';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechList from './components/techs/TechList';

// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    // initialize materialize js
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <SearchBar />
      <div className="container">
        {' '}
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechList />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
