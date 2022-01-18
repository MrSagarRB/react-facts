import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Intro() {
    return (
        <div className=" flex flex-col justify-center  items-center p-5 space-y-2">
          <h1 className="text-3xl">Sagar Borude</h1>
          <p className="text-lg">   Frontend Developer  </p>
          <a href="#"> www.Sagar-soft.net </a>
          <div className="flex space-x-4 pt-3"> 
         <button className=" bg-white text-black py-2 px-6 w-28  rounded-md flex  justify-between "> <FontAwesomeIcon icon="coffee" />  Email </button>
         <button className=" bg-white text-black py-2 px-6 w-28  rounded-md flex  justify-between ">  Linkdin </button>
        
         </div>
        </div>
    )
}

export default Intro
