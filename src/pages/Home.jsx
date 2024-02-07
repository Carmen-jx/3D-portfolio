import { useState,Suspense, useEffect, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Islands'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import { Rocket } from '../models/Rocket'
import { HomeInfo } from '../components/HomeInfo'
import { socialLinks } from '../constants'


import { soundon} from '../assets/icons'
import SoundCloudPlaylist from '../components/Soundcloud'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage]= useState(1);
    const [showPlaylist, setShowPlaylist] = useState(false);
    

    const soundCloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1680373332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

    const togglePlaylist = () => {
        setShowPlaylist(!showPlaylist);
    };


    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
    
        if (window.innerWidth < 768) {
          screenScale = [0.6, 0.6, 0.6];
          screenPosition = [0, -1.5, -1];
        } else {
          screenScale = [0.8, 0.8,0.8];
          screenPosition = [0, -1.5, -1];
        }
    
        return [screenScale, screenPosition];
      };

    const adjustRocketForScreenSize = () => {
        let screenScale ;
        let screenPosition ;

        if (window.innerWidth < 768) {
            screenScale = [0.005, 0.005, 0.005];
            screenPosition=[0, -0.9, 0]
        }else{
            screenScale = [ 0.003,0.003,0.003];
            screenPosition=[0,-0.9, 3]

        }
        return[screenScale, screenPosition]
    }



    const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize();
    const [rocketScale, rocketPosition]= adjustRocketForScreenSize();

  return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage= {currentStage}/>}         
        </div>

        <Canvas className="w-full h-screen bg-transparent ${isRotating? 'cursor-grabbing' : 'cursor-grab' }"
        camera={{near: 0.1, far:1000}}>
            <Suspense fallback={<Loader/>}>

                <directionalLight position={[1, 1, 1]} intensity ={1}/>
                <ambientLight intensity={-0.6}/>
                <hemisphereLight  skyColour="#2c4e7a" groundColor="#000000" intensity={10}/>
                <Sky isRotating={isRotating} />
                
                <Bird/>
            

                <Island
                position ={islandPosition}
                scale= {islandScale}
                rotaton = {islandRotation}
                isRotating= {isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                
                />
               <Rocket
                isRotating={isRotating}
                scale={rocketScale}
                position={rocketPosition}
                rotation={[0, 0, 0]}/>

            </Suspense>


        </Canvas>

        {showPlaylist && (
            <div className='soundcloud-popup'>
                <SoundCloudPlaylist key="soundcloud-playlist" url={soundCloudUrl} />
            </div>
            
       )}

        <div className='absolute bottom-2 left-2'>
        <img 
            src= {soundon}
            alt="sound"
            className='w-10 h-10 cursor-pointer object-contain relative z-20'
            onClick={togglePlaylist}/>
            
        </div>

        <div className='absolute bottom-2 right-2'>
            {socialLinks.map((socialLink, index) => (
                <a key={index} href={socialLink.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src={socialLink.iconUrl} alt={socialLink.name} style={{ width: '40px', height: '40px' }} />
                </a>
            ))}
        </div>
    
    </section>
  )
}

export default Home
