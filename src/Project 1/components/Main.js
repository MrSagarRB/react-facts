import { Cube } from "heroicons-react";



function Main() {
  return (
    <div className="h-screen w-full bg-gray-500 p-10 flex  justify-center">

<div> 

      <h1 className="text-4xl sm:text-4xl text-white font-semibold "> Fun Facts About Ract</h1>
      
      <ul className="text-gray-300 p-5 text-2xl ">
    <li className="flex items-center"> <Cube  className="text-cyan-200 mr-3"/>  Was first relese in 2013</li>

    <li className="sm:flex items-center"> <Cube  className="text-cyan-200 mr-3"/> Was Origanally Cereated by Jordern Walked </li>
    <li className="sm:flex items-center"> <Cube  className="text-cyan-200 mr-3"/> Has Over 100k Stars on GitHub</li>
    <li className="sm:flex items-center"> <Cube  className="text-cyan-200 mr-3"/> Is Maintained By Facebook </li>
    <li className="sm:flex items-center"> <Cube  className="text-cyan-200 mr-3"/> Powers Thousands of enterprices apps, including mobile apps </li>
      </ul>
    </div>


    </div>




  );
}

export default Main;
