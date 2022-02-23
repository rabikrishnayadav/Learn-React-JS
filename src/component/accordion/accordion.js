import React, { useState } from 'react';
import { questions } from './api';
import MyAccordion from './MyAccordion';

const Accordion = () => {

    const [data, setDAta] = useState(questions);

    return(
        <>
            <section className="main-div_acc">
            <div className="center_div_acc">
            <h1 className='heading'>React Accordion</h1>
                {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <MyAccordion key={id} {...curElem} />
                })
            }
            </div>
            </section>
        </>
    );
}

export default Accordion;