import React from 'react'
import Background from './componets/Background'
import Foregroud from './componets/Foregroud'
import Display from './componets/Display'

const App = () => {
  return (
    <div className='bg-zinc-800 w-full h-screen relative'>
      <Background/>
      <Foregroud/>
     
    </div>
  )
}

export default App