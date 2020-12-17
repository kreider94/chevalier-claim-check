import React from 'react';
import { MDBBtn } from 'mdbreact';

const Screen = ({ screen, handleAnswer }) => {

    if (screen) {
        return (
            <>  
                <h3 className="mb-5">{screen.message}</h3>
                {screen && screen.input ?
                    screen.input.choices.map(choice => {
                        return <MDBBtn
                                className="question__answer p-0 p-2 border-light"
                                key={choice.key}
                                onClick={handleAnswer}
                                value={choice.key}
                                label={choice.text}
                            >{choice.text}</MDBBtn>
                    })
                : null }
            </>
        )
    } else {
        return null;
    }
}

export default Screen

