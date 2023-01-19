import { useState } from "react";
import "./App.css"

export default function App(){
    const arr=[
               {pic : "https://www.pinkvilla.com/english/images/2022/12/1670149576_fitness-secrets-of-vijay-deverakonda-2.jpg",
                 name : "THUNIVU",
                 rate : "8.5/10",
                 genre: "Action/Drama",
                 lan : "2D/Tamil",
                 about : "A gang goes to rob a bank only to find that there`s already a criminal mastermind holding it for ransom, but his identities and motives behind the heist remains mysterious",
                 hero: "Ajith",
                 heroine:"manju",
                 director:"vinoth",
                 produce:"zee studios"
                },
                {pic : "https://i.pinimg.com/originals/07/ca/3d/07ca3dc7fcc227ed4a8230944122f1e5.jpg",
                name : "VARISU",
                rate : "8.1/10",
                genre: "Action/Drama",
                lan : "2D/Tamil",
                about : "Vijay, The prodigal son of business tycoon Rajendran agrees to take over the reins of the business, much to the chagrin of his brothers. But can Vijay prove himself to be.",
                hero: "Vijay",
                heroine:"Rashmika",
                director:"Vamsi",
                produce:"thil raju"
               },
               {pic : "https://i.pinimg.com/564x/76/2f/fa/762ffa968a2f4ab48b9a915cebe58b85.jpg",
                name : "AVATAR2",
                rate : "8.7/10",
                genre: "Action/Adven",
                lan : "3D/Tamil",
                about : "Set more than a decade after the events of the first film, Avatar The Way of Water begins to tell the story of the Sully family (Jake, Neytiri and their kids), the troub.",
                hero: "Sam",
                heroine:"Zoe saldana",
                director:"james cameron",
                produce:"Disney"
               },
               {pic : "https://dx35vtwkllhj9.cloudfront.net/lionsgateus/plane/images/portrait_bg.jpg",
                name : "PLANE",
                rate : "8.5/10",
                genre: "Action/Thr",
                lan : "2D/Tamil",
                about : "Pilot Brodie Torrance (Gerard Butler) saves his passengers from a lightning strike by making a risky landing on a war-torn island only to find that surviving the landing .",
                hero: "gerard butler",
                heroine:"daneilla",
                director:"jeon-francis",
                produce:"flying heven"
               }
             
              ]
    return(
        <div className="dis">
             {arr.map(value=>(<Cine photo={value.pic} name={value.name} rating={value.rate} genre={value.genre} lan={value.lan} about={value.about}  hero={value.hero} heroine={value.heroine} director={value.director} producer={value.produce}/> ))}
    
        </div>
    );
}
function Cine({photo,name,rating,genre,lan,about,hero,heroine,director,producer}){
    return(
        <div className="con1">
        <img className="pic" src={photo} alt="thunivu"/><br/>
        <div className="first">
        <p>{name} ⭐{rating}</p>
        </div>
        <div className="sec">
            <p>{genre} {lan}</p>
        </div>
        <h3 className="heading">ABOUT :</h3>
        <p>{about}</p>
        <h3 className="heading">CAST :</h3>
        <div>
            <p className="cast">HERO : {hero}</p>
            <p className="cast"> HEORINE : {heroine}</p>
            <p className="cast"> DIRECT : {director} </p> 
            <p className="cast"> PRODUCER :{producer}</p>
        </div>
        <Counter/><br/>
        <button className="book">Book Ticket</button>
         </div>
    );
}


function Counter(){
    const[total,setLike]=useState(0)
    const[total1,setDisLike]=useState(0)
    return(
        <div className="li">
            <button className="like" onClick={()=>setLike(total+1)}>👍{total}</button>
            <button className="dislike" onClick={()=>setDisLike(total1+1)}>👎{total1}</button>
        </div>
    );

}