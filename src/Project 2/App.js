import React from "react"
import Header from './Project 2/components/Header';
import Intro from "./Project 2/components/Intro";
import About from './Project 2/components/About';
import Intrests from "./Project 2/components/Intrests";
import Footer from './Project 2/components/Footer';




function App() {
    return (
        <div className=" h-screen bg-gray-700 flex items-center justify-center ">
           <div className="text-white bg-gray-900  "> 
           <Header />
           <Intro />
           <About />
           <Intrests />
           <Footer />
           </div>





        </div>
    )
}

export default App
