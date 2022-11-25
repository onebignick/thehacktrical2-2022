import { useState } from 'react';
import { Popup } from './popup';
import { CardButton } from './card';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import bullshark from '../media/bullshark.jpg'

import './quiz.css'
import "./navbar.css"

export const Quiz = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [quizPopup, setQuizPopup] = useState(false);
    return (
        <div className='quiz-page'>
            <Navbar className="nav-bar" bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-title">Sharky!</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Button className="signin button"
                            variant="primary">
                            Sign In
                        </Button>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="justify-content-end">
                            <Button variant="primary" onClick={() => setButtonPopup(true)}>Store</Button>
                            <Button variant="primary" onClick={() => setQuizPopup(true)}>Fish</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='PageBeforeQuiz'></div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <flex className="shop-cards">
                    <CardButton
                        title="Lorum Ipsom Dolor Sit Amen"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        imageLink={bullshark}
                    />
                    <CardButton
                        title="Lorum Ipsom Dolor Sit Amen"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <CardButton
                        title="Lorum Ipsom Dolor Sit Amen"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <CardButton
                        title="Lorum Ipsom Dolor Sit Amen"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                </flex>
            </Popup>
            <Popup trigger={quizPopup} setTrigger={setQuizPopup}></Popup>
        </div>
    );
}