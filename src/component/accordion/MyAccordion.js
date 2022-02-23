import React, {useState} from "react";
import './accordion.css';
import Button from '@material-ui/core/Button';                   // for v4

const MyAccordion = ({question, answer}) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="acc_div_data">
                <div>
                    <Button onClick={() => setShow(!show)}>
                    {
                        show ? '➖' : '➕'
                    }
                    </Button>
                </div>
                <div>
                    <h1>{question}</h1>
                     { show && <p className="answers">{answer}</p>}
                </div>
            </div>
        </>
    );
}

export default MyAccordion;