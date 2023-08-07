import React from 'react'
import { Provider } from 'react-redux'
import Store from './app/Store'
import Header from './Pages/Header'




import RoutesHandson7 from './Pages/RoutesHandson7'


const App = () => {
  return (
    <>
    <Provider store={Store}>
   <Header/>
<RoutesHandson7/>
</Provider>
    </>
  )
}

export default App