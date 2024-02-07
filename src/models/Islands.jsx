/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {a} from '@react-spring/three'
import islandScence from '../assets/3d/crystal_planet.glb'
import { debounce } from "lodash";

const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();
    const { gl, viewport} = useThree();
    const lastX= useRef(0);
    const rotationSpeed= useRef(0);
    const dampingFactor =0.95;

  const { nodes, materials } = useGLTF(islandScence);

  const handlePointerDown= (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX=e.touches ?  e.touches[0].cleintX: e.clientX
    lastX.current =clientX;

  }

  const handlePointerUp= (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

  }

  const handlePointerMove= (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){ 
      const clientX=e.touches ?  e.touches[0].cleintX: e.clientX

      const delta = (clientX-lastX.current)/ viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX

      rotationSpeed.current = delta * 0.01 * Math.PI
     }

  }

 // Handle keydown events
 const handleKeyDown = (event) => {
  if (event.key === "ArrowLeft") {
    if (!isRotating) setIsRotating(true);

     islandRef.current.rotation.y += 0.005 * Math.PI;
    rotationSpeed.current = 0.07;
  } else if (event.key === "ArrowRight") {
    if (!isRotating) setIsRotating(true);

    islandRef.current.rotation.y -= 0.005 * Math.PI;
    rotationSpeed.current = -0.007;
  }
};

// Handle keyup events
const handleKeyUp = (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    setIsRotating(false);
  }
};

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);


  useFrame(()=> { 
    if(!isRotating){
      rotationSpeed.current *= dampingFactor

      if (Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current =0;
      }

      islandRef.current.rotation.y += rotationSpeed.current
    }else {
      const rotation =islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.8 && normalizedRotation <= 3.2:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
          
        default:
          setCurrentStage(null);
      }
    }
  })
  return (
    <a.group ref={islandRef} {...props} dispose={null}>
    /*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ahingel (https://sketchfab.com/ahingel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/crystal-planet-7a95246b6eda448d98a236b91474bcbb
Title: Crystal Planet
*/



      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[21.557, 93.387, -201.535]}
            rotation={[-Math.PI / 2, 0, -0.347]}
            scale={34.583}
          >
            <mesh
              
              
              geometry={nodes.saturn_saturn_0.geometry}
              material={materials.saturn}
            />
            <mesh
              
              
              geometry={nodes.saturn_ring_saturn_0.geometry}
              material={materials.ring_saturn}
            />
          </group>
          <group
            position={[-244.886, 102.992, -273.355]}
            rotation={[-1.514, 0.405, 2.371]}
            scale={17.48}
          >
            <mesh
              
              
              geometry={nodes.leaves_twig_0.geometry}
              material={materials.twig}
            />
            <mesh
              
              
              geometry={nodes.leaves_leaves_0.geometry}
              material={materials.leaves}
            />
          </group>
          <mesh
            
            
            geometry={nodes.Cube_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-39.923, 18.022, 0]}
            rotation={[-Math.PI / 2, 0, -0.847]}
            scale={3.467}
          />
          <mesh
            
            
            geometry={nodes.main_planet_main_planet_0.geometry}
            material={materials.main_planet}
            rotation={[-Math.PI / 2, 0, -0.847]}
            scale={100}
          />
          <mesh
            
            
            geometry={nodes.main_crystal_main_crystal_0.geometry}
            material={materials.main_crystal}
            position={[3.529, 19.086, 1.793]}
            rotation={[-Math.PI / 2, 0, -0.847]}
            scale={9.084}
          />
          <mesh
            
            
            geometry={nodes.Sphere002_small_crystal_planet_0.geometry}
            material={materials.small_crystal_planet}
            position={[0, 130.374, 141.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={34.583}
          />
          <mesh
            
            
            geometry={nodes.tree_planet_tree_planet_0.geometry}
            material={materials.tree_planet}
            position={[-227.31, 34.287, -119.289]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            
            
            geometry={nodes.small_rocks_small_rocks_0.geometry}
            material={materials.small_rocks}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            
            
            geometry={nodes.Cube002_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[85.164, 13.052, -31.456]}
            rotation={[-0.728, 0.62, -1.847]}
            scale={2.313}
          />
          <mesh
            
            
            geometry={nodes.Cube004_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[44.212, -56.715, -25.815]}
            rotation={[0.178, 0.462, -1.98]}
            scale={0.259}
          />
          <mesh
            
            
            geometry={nodes.Cube005_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[36.214, -61.889, 25.339]}
            rotation={[-0.634, -0.751, -3.118]}
            scale={3.074}
          />
          <mesh
            
            
            geometry={nodes.Cube006_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[7.06, -51.557, 48.363]}
            rotation={[0.758, -1.026, -1.782]}
            scale={0.944}
          />
          <mesh
            
            
            geometry={nodes.Cube007_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[5.453, -7.654, 72.878]}
            rotation={[-3.072, -1.291, 1.634]}
            scale={2.795}
          />
          <mesh
            
            
            geometry={nodes.Cube008_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-11.792, -76.734, 17.372]}
            rotation={[2.208, -1.277, 0.218]}
            scale={3.229}
          />
          <mesh
            
            
            geometry={nodes.Cube009_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-43.976, -0.899, 60.239]}
            rotation={[-2.943, -0.717, 1.053]}
            scale={1.137}
          />
          <mesh
            
            
            geometry={nodes.Cube010_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-62.89, -37.026, 15.713]}
            rotation={[2.815, -0.447, 0.699]}
            scale={1.212}
          />
          <mesh
            
            
            geometry={nodes.Cube011_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-75.239, 2.919, -3.344]}
            rotation={[2.974, -0.153, 0.799]}
            scale={1.302}
          />
          <mesh
            
            
            geometry={nodes.Cube012_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-64.074, -55.76, -3.77]}
            rotation={[2.717, -0.202, 0.671]}
            scale={2.576}
          />
          <mesh
            
            
            geometry={nodes.Cube013_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-58.722, 19.404, 18.922]}
            rotation={[-0.001, -1.234, 0.005]}
            scale={3.228}
          />
          <mesh
            
            
            geometry={nodes.Cube014_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-55.652, -10.96, -37.304]}
            rotation={[-2.651, 1.188, 0.777]}
            scale={0.366}
          />
          <mesh
            
            
            geometry={nodes.Cube015_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-30.557, -69.09, -27.038]}
            rotation={[-2.449, 0.915, 0.264]}
            scale={1.963}
          />
          <mesh
            
            
            geometry={nodes.Cube016_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-18.567, 18.854, -85.709]}
            rotation={[-0.506, 0.185, 0.089]}
            scale={2.331}
          />
          <mesh
            
            
            geometry={nodes.Cube017_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-26.654, -65.9, -34.78]}
            rotation={[3.121, 0.874, 1.192]}
            scale={2.449}
          />
          <mesh
            
            
            geometry={nodes.Cube018_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-29.749, 19.5, -47.725]}
            rotation={[0.001, -0.333, 0.001]}
            scale={0.019}
          />
          <mesh
            
            
            geometry={nodes.Cube019_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-11.035, 19.501, -14.841]}
            rotation={[-0.001, -0.633, 0]}
            scale={2.237}
          />
          <mesh
            
            
            geometry={nodes.Cube020_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-39.395, 4.009, -62.554]}
            rotation={[3.051, 0.887, 0.839]}
            scale={2.886}
          />
          <mesh
            
            
            geometry={nodes.Cube021_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-9.326, 19.293, 81.479]}
            rotation={[0.023, -0.475, -0.013]}
            scale={0.724}
          />
          <mesh
            
            
            geometry={nodes.Cube022_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[22.371, 19.396, 37.562]}
            rotation={[0.009, -0.703, 0.002]}
            scale={1.41}
          />
          <mesh
            
            
            geometry={nodes.Cube023_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[15.754, 17.089, 89.082]}
            rotation={[1.053, -0.392, -0.145]}
            scale={1.829}
          />
          <mesh
            
            
            geometry={nodes.Cube024_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-5.111, 19.495, -52.034]}
            rotation={[0, -0.237, -0.003]}
            scale={2.199}
          />
          <mesh
            
            
            geometry={nodes.Cube025_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[15.672, 19.368, -18.395]}
            rotation={[-0.015, -0.514, -0.016]}
            scale={1.417}
          />
          <mesh
            
            
            geometry={nodes.Cube026_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[4.281, 19.491, -5.846]}
            rotation={[-0.003, -0.653, -0.003]}
            scale={3.422}
          />
          <mesh
            
            
            geometry={nodes.Cube027_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[25.709, 19.011, -28.488]}
            rotation={[-0.031, -0.428, -0.039]}
            scale={1.227}
          />
          <mesh
            
            
            geometry={nodes.Cube028_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[64.212, 17.21, -47.115]}
            rotation={[-0.012, -0.517, -0.015]}
            scale={0.963}
          />
          <mesh
            
            
            geometry={nodes.Cube029_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[58.996, 19.495, 37.836]}
            rotation={[0.002, -0.658, 0.003]}
            scale={1.237}
          />
          <mesh
            
            
            geometry={nodes.Cube030_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[15.69, -63.628, -35.382]}
            rotation={[-0.192, 0.908, -2.18]}
            scale={0.115}
          />
          <mesh
            
            
            geometry={nodes.Cube031_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[48.241, -8.782, -49.983]}
            rotation={[0.145, 1.14, -1.852]}
            scale={0.571}
          />
          <mesh
            
            
            geometry={nodes.Cube032_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[58.867, 0.501, -51.409]}
            rotation={[0.219, 0.934, -2.504]}
            scale={1.993}
          />
          <mesh
            
            
            geometry={nodes.Cube033_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-2.905, -72.149, 10.341]}
            rotation={[1.162, -0.467, -1.493]}
            scale={1.767}
          />
          <mesh
            
            
            geometry={nodes.Cube034_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[85.164, 13.052, -31.456]}
            rotation={[-0.728, 0.62, -1.847]}
            scale={2.313}
          />
          <mesh
            
            
            geometry={nodes.Cube035_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[44.212, -56.715, -25.815]}
            rotation={[0.178, 0.462, -1.98]}
            scale={0.259}
          />
          <mesh
            
            
            geometry={nodes.Cube036_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[36.214, -61.889, 25.339]}
            rotation={[-0.634, -0.751, -3.118]}
            scale={3.074}
          />
          <mesh
            
            
            geometry={nodes.Cube037_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[7.06, -51.557, 48.363]}
            rotation={[0.758, -1.026, -1.782]}
            scale={0.944}
          />
          <mesh
            
            
            geometry={nodes.Cube038_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[5.453, -7.654, 72.878]}
            rotation={[-3.072, -1.291, 1.634]}
            scale={2.795}
          />
          <mesh
       
            geometry={nodes.Cube039_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-11.792, -76.734, 17.372]}
            rotation={[2.208, -1.277, 0.218]}
            scale={3.229}
          />
          <mesh
     
            geometry={nodes.Cube040_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-43.976, -0.899, 60.239]}
            rotation={[-2.943, -0.717, 1.053]}
            scale={1.137}
          />
          <mesh
       
            geometry={nodes.Cube041_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-62.89, -37.026, 15.713]}
            rotation={[2.815, -0.447, 0.699]}
            scale={1.212}
          />
          <mesh
     
            geometry={nodes.Cube042_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-75.239, 2.919, -3.344]}
            rotation={[2.974, -0.153, 0.799]}
            scale={1.302}
          />
          <mesh
      
            geometry={nodes.Cube043_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-64.074, -55.76, -3.77]}
            rotation={[2.717, -0.202, 0.671]}
            scale={2.576}
          />
          <mesh
      
            geometry={nodes.Cube044_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-58.722, 19.404, 18.922]}
            rotation={[-0.001, -1.234, 0.005]}
            scale={3.228}
          />
          <mesh
       
            geometry={nodes.Cube045_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-55.652, -10.96, -37.304]}
            rotation={[-2.651, 1.188, 0.777]}
            scale={0.366}
          />
          <mesh
   
            geometry={nodes.Cube046_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-30.557, -69.09, -27.038]}
            rotation={[-2.449, 0.915, 0.264]}
            scale={1.963}
          />
          <mesh
 
            geometry={nodes.Cube047_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-18.567, 18.854, -85.709]}
            rotation={[-0.506, 0.185, 0.089]}
            scale={2.331}
          />
          <mesh
        
            geometry={nodes.Cube048_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-26.654, -65.9, -34.78]}
            rotation={[3.121, 0.874, 1.192]}
            scale={2.449}
          />
          <mesh
     
            geometry={nodes.Cube049_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-29.749, 19.5, -47.725]}
            rotation={[0.001, -0.333, 0.001]}
            scale={0.019}
          />
          <mesh
      
            geometry={nodes.Cube050_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-11.035, 19.501, -14.841]}
            rotation={[-0.001, -0.633, 0]}
            scale={2.237}
          />
          <mesh
     
            geometry={nodes.Cube051_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-39.395, 4.009, -62.554]}
            rotation={[3.051, 0.887, 0.839]}
            scale={2.886}
          />
          <mesh
         
            geometry={nodes.Cube052_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-9.326, 19.293, 81.479]}
            rotation={[0.023, -0.475, -0.013]}
            scale={0.724}
          />
          <mesh
        
            geometry={nodes.Cube053_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[22.371, 19.396, 37.562]}
            rotation={[0.009, -0.703, 0.002]}
            scale={1.41}
          />
          <mesh
       
            geometry={nodes.Cube054_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[15.754, 17.089, 89.082]}
            rotation={[1.053, -0.392, -0.145]}
            scale={1.829}
          />
          <mesh
          
            geometry={nodes.Cube055_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-5.111, 19.495, -52.034]}
            rotation={[0, -0.237, -0.003]}
            scale={2.199}
          />
          <mesh
        
            geometry={nodes.Cube056_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[15.672, 19.368, -18.395]}
            rotation={[-0.015, -0.514, -0.016]}
            scale={1.417}
          />
          <mesh
       
            geometry={nodes.Cube057_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[4.281, 19.491, -5.846]}
            rotation={[-0.003, -0.653, -0.003]}
            scale={3.422}
          />
          <mesh
        
            geometry={nodes.Cube058_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[25.709, 19.011, -28.488]}
            rotation={[-0.031, -0.428, -0.039]}
            scale={1.227}
          />
          <mesh
       
            geometry={nodes.Cube059_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[64.212, 17.21, -47.115]}
            rotation={[-0.012, -0.517, -0.015]}
            scale={0.963}
          />
          <mesh
        
            geometry={nodes.Cube060_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[58.996, 19.495, 37.836]}
            rotation={[0.002, -0.658, 0.003]}
            scale={1.237}
          />
          <mesh
      
            geometry={nodes.Cube061_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[15.69, -63.628, -35.382]}
            rotation={[-0.192, 0.908, -2.18]}
            scale={0.115}
          />
          <mesh
        
            geometry={nodes.Cube062_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[48.241, -8.782, -49.983]}
            rotation={[0.145, 1.14, -1.852]}
            scale={0.571}
          />
          <mesh
    
            geometry={nodes.Cube063_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[58.867, 0.501, -51.409]}
            rotation={[0.219, 0.934, -2.504]}
            scale={1.993}
          />
          <mesh
            geometry={nodes.Cube064_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-2.905, -72.149, 10.341]}
            rotation={[1.162, -0.467, -1.493]}
            scale={1.767}
          />
          <mesh
    
            geometry={nodes.Cube065_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[6.219, 129.579, 107.238]}
            rotation={[0.008, 1.389, -1.602]}
            scale={2.313}
          />
          <mesh
 
            geometry={nodes.Cube066_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[5.547, 157.255, 120.457]}
            rotation={[-0.187, 1.224, -0.499]}
            scale={0.259}
          />
          <mesh
            
            
            geometry={nodes.Cube067_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[27.133, 138.293, 121.542]}
            rotation={[-0.013, 0.623, -1.332]}
            scale={3.074}
          />
          <mesh
            
            
            geometry={nodes.Cube068_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[23.802, 105.414, 140.785]}
            rotation={[0.008, 0.006, -2.376]}
            scale={0.944}
          />
          <mesh
    
            geometry={nodes.Cube069_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[32.638, 120.801, 136.84]}
            rotation={[0.037, 0.12, -1.857]}
            scale={2.795}
          />
          <mesh
          
            geometry={nodes.Cube070_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[29.314, 144.689, 152.049]}
            rotation={[-0.017, -0.364, -1.15]}
            scale={3.229}
          />
          <mesh
        
            geometry={nodes.Cube071_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[29.873, 142.844, 152.981]}
            rotation={[-0.004, -0.379, -1.204]}
            scale={1.137}
          />
          <mesh
       
            geometry={nodes.Cube072_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[26.112, 120.801, 161.175]}
            rotation={[0.046, -0.665, -1.824]}
            scale={1.212}
          />
          <mesh
          
            geometry={nodes.Cube073_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[14.737, 106.868, 161.518]}
            rotation={[0.03, -0.961, -2.294]}
            scale={1.302}
          />
          <mesh
      
            geometry={nodes.Cube074_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[18.255, 142.844, 167.58]}
            rotation={[-0.007, -0.968, -1.209]}
            scale={2.576}
          />
          <mesh

            geometry={nodes.Cube075_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[2.052, 160.932, 156.767]}
            rotation={[-1.08, -1.51, -1.558]}
            scale={3.228}
          />
          <mesh
     
            geometry={nodes.Cube076_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-5.335, 138.293, 174.167]}
            rotation={[-3.078, -1.408, 1.864]}
            scale={0.366}
          />
          <mesh
          
            geometry={nodes.Cube077_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-6.219, 129.579, 175.022]}
            rotation={[3.133, -1.389, 1.54]}
            scale={1.963}
          />
          <mesh
     
            geometry={nodes.Cube078_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-15.109, 127.434, 171.751]}
            rotation={[3.113, -1.111, 1.46]}
            scale={2.331}
          />
          <mesh

            geometry={nodes.Cube079_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-23.108, 124.847, 165.986]}
            rotation={[3.136, -0.821, 1.407]}
            scale={2.449}
          />
          <mesh
   
            geometry={nodes.Cube080_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-9.685, 161.948, 151.126]}
            rotation={[-3.134, -0.788, 2.727]}
            scale={0.019}
          />
          <mesh

            geometry={nodes.Cube081_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-13.441, 104.047, 158.642]}
            rotation={[3.044, -0.837, 0.627]}
            scale={2.237}
          />
          <mesh
    
            geometry={nodes.Cube082_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-9.707, 99.002, 151.592]}
            rotation={[3.122, -0.793, 0.418]}
            scale={2.886}
          />
          <mesh
    
            geometry={nodes.Cube083_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-21.859, 105.414, 150.557]}
            rotation={[3.133, -0.399, 0.763]}
            scale={0.724}
          />
          <mesh
         
            geometry={nodes.Cube084_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-32.336, 127.434, 152.098]}
            rotation={[3.128, -0.326, 1.481]}
            scale={1.41}
          />
          <mesh

            geometry={nodes.Cube085_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-32.19, 118.313, 142.306]}
            rotation={[3.132, -0.033, 1.214]}
            scale={1.829}
          />
          <mesh
    
            geometry={nodes.Cube086_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-24.923, 154.21, 141.51]}
            rotation={[-3.135, -0.009, 2.33]}
            scale={2.199}
          />
          <mesh
 
            geometry={nodes.Cube087_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-22.028, 104.047, 139.683]}
            rotation={[3.076, 0.142, 0.709]}
            scale={1.417}
          />
          <mesh
  
            geometry={nodes.Cube088_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-19.846, 102.397, 137.941]}
            rotation={[3.124, 0.182, 0.631]}
            scale={3.422}
          />
          <mesh
   
            geometry={nodes.Cube089_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-23.171, 154.21, 131.944]}
            rotation={[-3.134, 0.384, 2.327]}
            scale={1.227}
          />
          <mesh

            geometry={nodes.Cube090_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-29.521, 120.801, 126.564]}
            rotation={[3.101, 0.469, 1.308]}
            scale={0.963}
          />
          <mesh

            geometry={nodes.Cube091_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-20.116, 131.594, 113.271]}
            rotation={[-3.136, 0.946, 1.601]}
            scale={1.237}
          />
          <mesh

            geometry={nodes.Cube092_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-16.014, 110.544, 117.905]}
            rotation={[3.128, 0.972, 0.973]}
            scale={0.115}
          />
          <mesh

            geometry={nodes.Cube093_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-9.775, 114.535, 112.316]}
            rotation={[2.958, 1.267, 1.268]}
            scale={0.571}
          />
          <mesh

            geometry={nodes.Cube094_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-0.926, 106.868, 115.99]}
            rotation={[2.454, 1.544, 1.51]}
            scale={1.993}
          />
          <mesh
 
            geometry={nodes.Cube095_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-0.483, 142.844, 108.996]}
            rotation={[-2.847, 1.557, 1.644]}
            scale={1.767}
          />
          <mesh
  
            geometry={nodes.tree_bark_tree_bark_0.geometry}
            material={materials.tree_bark}
            position={[-230.168, 77.842, -124.705]}
            rotation={[-Math.PI / 2, 0, 1.152]}
            scale={10.595}
          />
        </group>
      </group>


    </a.group>
  );
}


export default Island
