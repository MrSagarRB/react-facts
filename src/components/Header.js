function Header() {

  return (
    <div>
      <nav className="bg-gray-800 flex items-center justify-between p-5">

          <div className="flex flex-col sm:flex-row items-center space-x-2"> 
               <img src="./logo192.png" className="w-16" />
           <h1 className="text-cyan-200 text-3xl font-semibold"> ReactFacts</h1>
          
          </div>

          <div className="text-white hidden sm:inline-block">
             <h1 className="sm:text-xl font-medium "> React Cource- Project 1</h1> 
          </div>
   

      </nav>

    </div>
  );
}

export default Header;
