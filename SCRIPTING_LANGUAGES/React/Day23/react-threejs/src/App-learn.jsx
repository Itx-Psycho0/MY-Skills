import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'


const RotatingCube = () => {
  const meshRef = React.useRef()
  useFrame(() => {
    if (meshRef.current) {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" emissive={"#468585"} />
      <Sparkles size={10} scale={6} speed={0.02} noise={0.3} position={[0, 0, 0]} color={"Blue"} />
    </mesh>

  )
}

const AppLearn = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <directionalLight position={[0, 0, 5]} intensity={1} color={0x9cdba6} />
      <color attach="background" args={['#f0f0f0']} />
      <RotatingCube/>

    </Canvas>
  )
}

export default AppLearn
