import planeScene from '../assets/3d/rocket.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';


export const Rocket = ({isRotating, ...props}) => {
    const ref= useRef();
    const {scene, animations}= useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
      if(isRotating){
        actions['Take 001'].play();
      }else{
        actions['Take 001'].stop();
      }
     }, [actions, isRotating])

  return (
    <mesh {...props} ref= {ref}>
        <primitive object={scene}/>
    </mesh>
  )
}
 