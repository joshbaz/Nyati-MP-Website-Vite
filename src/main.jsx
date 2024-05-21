import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './5-Store/Contexts/SidebarContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
);
