import React, { useEffect, useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import Splash from './src/screens/Splash'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  const [splash, setSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000);
  }, [])
  
  return (
    <>
    <PaperProvider>
      {splash?<Splash/>:<StackNavigation/>}
    </PaperProvider>
    </>
  )
}

export default App

