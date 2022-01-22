function Card(props) {
  return (
    
   
      <div className="m-5 w-44 flex  flex-col ">
        <img src={props.img} className="w-full rounded-xl"  />
        
        <div className="flex text-base mt-2">
          <img src="./star.png" className="h-5" />
          <span className="font-semibold">  {props.rating} </span>
          <span className="text-gray-400"> ({props.reviewCount}) .</span>
          <span className="text-gray-400"> {props.contry} </span>
        </div>

        <p>{props.title}</p>
        <p className="">
          <span className="font-bold"> From ${props.price} / </span> person
        </p>


      </div>



  );
}

export default Card;
