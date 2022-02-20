import React from "react";
import Card from "./Cards";
import sdata from "./sdata";

const Amazon = () => {
    return(        
        <Card
            key={sdata[3].id}
            imgsrc={sdata[3].imgsrc}
            sname={sdata[3].sname}
            title={sdata[3].title}
            slink={sdata[3].slink}
        />   
    );
};

export default Amazon;