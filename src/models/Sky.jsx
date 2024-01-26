import { useGLTF } from '@react-three/drei'
import { useRef} from 'react'
import { useFrame, useThree} from '@react-three/fiber'
import skyScene from '../assets/3d/milky way.glb'
import * as THREE from 'three';

const Sky = ( {isRotating}) => {
    const sky= useGLTF(skyScene);
    const skyRef= useRef();
    const { camera } = useThree();

   useFrame((_, delta)=> {
      if (isRotating){
        skyRef.current.rotation.y += 0.15 * delta
      }
    })
   
   
  return (
    <mesh ref={skyRef} dispose={null}>
        <primitive object = {sky.scene} scale= {[10,8,8]} position={[0,0,1]}/>
    </mesh>
  )
}

export default Sky

