import React from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'



const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App
