function Card() {
  return (
    <div className="flex text-sm ">
      <div className="w-[175px] space-y-1">
        <img src="./image12.png" className="w-full" />
        <div className="flex space-x-1">
          <img src="./star.png" className="" />
          <span> 5.0 </span>
          <span> (6) .</span>
          <span> USA </span>
        </div>

        <p>Life lessons with Katie Zaferes
 </p>
        <p> <span className="font-bold">   From $136 / </span> person</p>




      </div>

      {/* 
            <div>
            <img src="./image12.png" />
            </div>

            <div>
            <img src="./image12.png" />
            </div> */}
    </div>
  );
}

export default Card;
