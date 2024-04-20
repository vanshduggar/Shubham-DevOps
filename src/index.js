import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Context/AuthContext/AuthProvider';
import JsonProvider from './Context/JsonDataContext/JsonProvider';
import PopupProvider from './Context/PopupContext/PopupProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={ <h1 className="text-[44px] text-[#000] font-[800] ">Loading data...</h1>}>
    <AuthProvider>
      <JsonProvider>
        <PopupProvider>
          <App />
        </PopupProvider>
      </JsonProvider>
    </AuthProvider>
  </Suspense>
);
