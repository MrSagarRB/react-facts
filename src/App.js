import React from "react";
import Card from "./components/Card";
import HeroComp from "./components/HeroComp";
import Data from "./components/Data";
import Navbar from "./components/Navbar";

function App() {
  const dataElements = Data.map(x => {
    return <Card 
    img={x.img} 
    rating={x.stats.rating}
    reviewCount={x.stats.reviewCount}
    contry={x.location}
    title={x.title}
    price={x.price}

     />
  })
 


  return <div>
    
    <Navbar />
    <HeroComp />
    <div className="flex overflow-auto  scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"> 
    {dataElements}
    </div>
    
    </div>;
}

export default App;
