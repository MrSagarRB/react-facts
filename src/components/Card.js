function Card(props) {
  return (
    <div className="flex text-sm ">
      <div className="w-[175px] space-y-1">
        <img src={props.img} className="w-full" />
        <div className="flex space-x-1">
          <img src="./star.png" className="" />
          <span> {props.rating} </span>
          <span> {props.reviewCount} .</span>
          <span> {props.contry} </span>
        </div>

        <p>{props.title}
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
