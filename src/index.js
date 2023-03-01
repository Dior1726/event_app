import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './store/index.js'
import { GoogleApiProvider } from 'react-gapi'
import App from './App.jsx'
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleApiProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </GoogleApiProvider>
)
