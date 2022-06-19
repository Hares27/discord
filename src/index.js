import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from "./User.js";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store=configureStore({
  reducer:{
    user:userReducer,

  }
})

root.render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
);
