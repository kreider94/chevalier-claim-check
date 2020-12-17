import React, { useState, useEffect } from 'react'
import Screen from './Screen';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { MdKeyboardBackspace, MdKeyboardReturn } from "react-icons/md";
import { data } from '../claim-check';

 const ScreenContainer = () => {
    const [questions, setQuestions] = useState(null);
    const [currentScreen, setCurrentScreen] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        if (data && data.questions.length) {
            setQuestions(data.questions);
            setCurrentScreen(data.questions[0]);
        }
    }, [])

    useEffect(() => {
        if (questions && !currentScreen.final) {
            setPrevious(questions[questions.indexOf(currentScreen)-1]);
        }
    }, [questions, currentScreen]);


    useEffect(() => {
        console.log(previous)
    }, [previous]);

    const handleAnswer = (e) => {
        e.preventDefault();

        const answer = e.target.value;
    
        let found = currentScreen.next.filter(option => {
            return option.conditions[0].value === answer;
        });

        if (found.length) {
            setCurrentScreen(questions.filter(item => item.key === found[0].key)[0])
        }
    }

    const handleReset = () => {
        setCurrentScreen(questions[0]);
    }
    
    const handleBack = () => {
        setCurrentScreen(previous)
    }

    return (
        <MDBContainer>
            <MDBRow className="justify-content-center mt-5">
                <MDBCol className="screen__container" md='10' xs='12'>
                    <Screen screen={currentScreen} handleAnswer={handleAnswer}/>
                    {previous ?
                        currentScreen.final ?
                            <MDBBtn onClick={handleReset} style={{color: "white"}}>
                                <MdKeyboardReturn color="white" /> start over
                            </MDBBtn>
                        : 
                            <MDBBtn onClick={handleBack} style={{color: "white"}}>
                                <MdKeyboardBackspace color="white" /> back
                            </MDBBtn>
                    : !previous && currentScreen && currentScreen.final ?
                        <MDBBtn onClick={handleReset} style={{color: "white"}}>
                            <MdKeyboardReturn color="white" /> start over
                        </MDBBtn>
                        : null
                    }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default ScreenContainer

