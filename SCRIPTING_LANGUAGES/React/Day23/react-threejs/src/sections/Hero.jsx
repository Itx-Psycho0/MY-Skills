import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import {HackerRoom} from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Suspense } from 'react'
import { Leva, useControls} from 'leva'
import { useMediaQuery } from 'react-responsive'


const Hero = () => {
    const controls = useControls(
        'HackerRoom', {
            positionX: { value: 2.5, min: -10, max: 10, step: 0.01 },
            positionY: { value: 2.5, min: -10, max: 10, step: 0.01 },
            positionZ: { value: 2.5, min: -10, max: 10, step: 0.01 },
            rotationX: { value: 2.5, min: -10, max: 10, step: 0.01 },
            rotationY: { value: 2.5, min: -10, max: 10, step: 0.01 },
            rotationZ: { value: 2.5, min: -10, max: 10, step: 0.01 },
            scale: { value: 2.5, min: 0.1, max: 10, step: 0.01 },
        }
    )
    const isMobile = useMediaQuery({maxWidth: 768})
  return (
    <section className='min-h-screen w-full flex flex-col relative '>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsanas'>Hi, I am Psycho<span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>I build immersive 3D experiences</p>
        </div>
      <div className='w-full h-full absolute inset-0'>
        <Leva/>
        <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader/>}>
                <ambientLight intensity={0.5} />
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HackerRoom 
                // scale={0.09} 
                // position={[0, -6, 0]} 
                // rotation={[0, Math.PI , 0]}
                position={[2, -8, 2]} 
                rotation={[0.4, -3, 0]}
                scale={isMobile? 0.07: 0.1}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={1} />
            </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Hero
