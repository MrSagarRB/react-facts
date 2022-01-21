



function Joke(props) {
    let like=props.like;
let status;


    if (like=="true")
    { 
        status="Liked By Peoples";
    }else {
        status=" Not Liked By Peoples";
    }





    return (
        
      


        <div>
            <h1> {props.title} </h1>
            <p> {props.joke_body} </p>
            <p> {status}</p>

        </div>
    )

}

export default Joke;
