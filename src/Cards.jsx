import React from "react";

// Card Component
// here are used(calling) the props which is defined
// fou use pass any one name of paramenter in function for access props linke Card(props)
// for access props use {props.nameOfProps} 
function Card(props){
    return(
        <>
            <div className="cards">
               <div className="card">
                   <img src={props.imgsrc} alt="Card Image" className="card_img" width={300} height={250} />
                   <div className="cart_info">
                       <span className="card_caregory">
                           {props.title}
                       </span>
                       <h3 className="cart_title">{props.sname}</h3>
                       <a href={props.slink} target="_blank">
                           <button> Watch Now</button>
                       </a>
                   </div>
               </div>
           </div>
        </>
    );
}

export default Card;