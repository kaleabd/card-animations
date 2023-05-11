/* This code is importing the necessary modules for a TypeScript React application, including the React
and ReactDOM libraries, the App component, and a CSS file. It then uses the `createRoot` method from
ReactDOM to render the App component inside a root element in the HTML document. The `StrictMode`
component is also used to enable additional runtime checks and warnings for potential issues in the
application. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
