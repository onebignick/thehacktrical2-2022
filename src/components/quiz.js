import { useState } from 'react';
import { Popup } from './popup';
import { CardButton } from './card';
import { QuizPopup } from './quizResult';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import bullshark from '../media/bullshark.jpg';
import sharkbait from '../media/shark bait.jpg';
import whaleshark from '../media/whale shark.jpg';
import hammerheadshark from '../media/hammerhead-shark.webp';

import './quiz.css'
import "./navbar.css"

export const Quiz = () => {
    const random_generator = () => {
        console.log(Math.floor(Math.random() * 2));
        return Math.floor(Math.random() * 2);
    }

    const [coinNumber, setCoinNumber] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [quizPopup, setQuizPopup] = useState(false);
    const [quizResult, setQuizResult] = useState('');

    const set_result = () => {
        const stuff = random_generator();
        if (stuff === 1) {
            setQuizResult(true);
        } else {
            setQuizResult(false);
        }

    }
    return (
        <div className='quiz-page'>
            <Navbar className="nav-bar" bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-title">Sharky!</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="justify-content-end">
                            <Button variant="primary" onClick={() => setButtonPopup(true)}>Store</Button>
                            <Button variant="primary" onClick={() => { setQuizPopup(true); set_result() }}>Fish</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <flex className="shop-cards">
                    <CardButton
                        className="card"
                        title="Bull Shark Fragments"
                        text="
                        10 fragments for 500 coins!
                        Collect 100 fragments to add this shark to your Sharklopedia."
                        imageLink={bullshark}
                    />
                    <CardButton
                        className="card"
                        title="Shark Bait"
                        text="For just 15 coins, the chances of getting a shark will increase in the next 1 hour!"
                        imageLink={sharkbait}
                    />
                    <CardButton
                        className="card"
                        title="Whale Shark Fragments"
                        text=" 10 fragments for 500 coins!
                        Collect 100 fragments to add this shark to your Sharklopedia."
                        imageLink={whaleshark}
                    />
                    <CardButton
                        className="card most-right"
                        title="Hammerhead Shark Fragments"
                        text=" 10 fragments for 500 coins!
                        Collect 100 fragments to add this shark to your Sharklopedia."
                        imageLink={hammerheadshark}
                    />
                </flex>
            </Popup>
            <QuizPopup trigger={quizPopup} setTrigger={setQuizPopup} result={quizResult} setQuizResult={setQuizResult} />
        </div>
    );
}