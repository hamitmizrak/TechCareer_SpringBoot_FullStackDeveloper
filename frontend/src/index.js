import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterMain from './component/RouterMain';

// 18n (dil)
import './internationalization/i18nlanguage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <RouterMain/>
    </React.Fragment>
   
  </React.StrictMode>
);

reportWebVitals();
