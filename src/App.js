import React from "react"
import Header from './components/Header';
import Intro from "./components/Intro";
import About from './components/About';
import Intrests from "./components/Intrests";
import Footer from './components/Footer';




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
