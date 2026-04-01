import React from 'react'
import { useGLTF } from '@react-three/drei'

const Target = (props) => {
    const targetRef = React.useRef()
    const {scene} = useGLTF('')
  return (
    <div>
      <mesh {...props} ref={targetRef}>
        <primitive object={scene} ref={targetRef} />
      </mesh>
    </div>
  )
}

export default Target
