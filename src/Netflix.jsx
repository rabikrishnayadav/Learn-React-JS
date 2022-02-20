import React from "react";
import Card from "./Cards";
import sdata from "./sdata";

const Netflix = () => {
    return(        
        <Card
            key={sdata[1].id}
            imgsrc={sdata[1].imgsrc}
            sname={sdata[1].sname}
            title={sdata[1].title}
            slink={sdata[1].slink}
        />   
    );
};

export default Netflix;