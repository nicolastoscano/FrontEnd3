import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import Principal from './Principal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Principal nombre="Ford" precio="$4000" />
    <Principal nombre="Chevrolet" precio="$5000" />
    <Principal nombre="Fiat" precio="$2000" />
    <Footer/>
  </React.StrictMode>,
)
