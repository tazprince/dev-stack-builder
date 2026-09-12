import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Technologies from './components/Technologies/Technologies'
import type { Technology } from './types/Technology'

const technologiesFetch = async (): Promise<Technology[]> => {
    const response = await fetch("/public/data.json");
    const data = await response.json();
    return data;
  };

function App() {

   const [technologiesPromise] = useState(() => technologiesFetch());


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading technologies...</h2>}>
        <Technologies technologiesPromise = {technologiesPromise} ></Technologies>
      </Suspense>
    </>
  )
}

export default App
