import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import {HackerRoom} from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Suspense } from 'react'
import { Leva} from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import HeroCamera from '../components/HeroCamera'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import Button from '../components/Button'


const Hero = () => {
    // const controls = useControls(
    //     'HackerRoom', {
    //         positionX: { value: 2.5, min: -10, max: 10, step: 0.01 },
    //         positionY: { value: 2.5, min: -10, max: 10, step: 0.01 },
    //         positionZ: { value: 2.5, min: -10, max: 10, step: 0.01 },
    //         rotationX: { value: 2.5, min: -10, max: 10, step: 0.01 },
    //         rotationY: { value: 2.5, min: -10, max: 10, step: 0.01 },
    //         rotationZ: { value: 2.5, min: -10, max: 10, step: 0.01 },
    //         scale: { value: 2.5, min: 0.1, max: 10, step: 0.01 },
    //     }
    // )
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    const isSmall = useMediaQuery({maxWidth: 440})

    const sizes = calculateSizes(isMobile, isTablet, isSmall)
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
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <HeroCamera isMobile={isMobile} isTablet={isTablet} isSmall={isSmall}>
           <HackerRoom 
                // scale={0.09} 
                // position={[0, -6, 0]} 
                // rotation={[0, Math.PI , 0]}
                position={sizes.deskPosition} 
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}/>
                </HeroCamera>

                <group>
                  {/* <Target position={sizes.targetPosition} /> */}
                  <ReactLogo position={sizes.reactLogoPosition} />
                   <Cube position={sizes.cubePosition} /> 
                  <Rings position={sizes.ringPosition} />
                </group>
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={1} />
            </Suspense>

        </Canvas>

      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href='#contact' className='w-fit'>
          <Button name="Let's work together!"  isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
        </a>
      </div>
    </section>
  )
}
export default Hero;
