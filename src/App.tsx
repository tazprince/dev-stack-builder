import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import type { Technology } from "./types/Technology";
import Footer from "./components/Footer/Footer";

const technologiesFetch = async (): Promise<Technology[]> => {
  const response = await fetch("/public/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  //for selection
  const [stack, setStack] = useState<Technology[]>([]);
  //add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.find((item) => item.id === technology.id);

    if (!alreadyAdded) {
      setStack((preStack) => [...preStack, technology]);
    }
  };
  //remove any technology
  const handleRemoveFromStack = (id:string) => {
    setStack((preStack) => preStack.filter((item) => item.id !== id));
  };
  //remove all
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2 className="flex justify-center">Loading technologies...</h2>}>
        <Technologies
          technologiesPromise={technologiesPromise}
          stack={stack}
          handleAddToStack={handleAddToStack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        ></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
