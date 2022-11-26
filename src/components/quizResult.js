import { useState } from "react";

import { FishCaughtCard } from './fishcaught-card';
import fishingAnimation from '../media/fishing-animation.gif';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./quizResult.css"

export function QuizPopup(props) {
    return (props.trigger) ? (
        (props.result) ? (
            <div>
                <button className="close-btn-fishcaught" onClick={() => props.setTrigger(false)}>X</button>
                <FishCaughtCard
                    className="fish-card"
                    title="Fish Caught!"
                    text="You gained 100 coins"
                    imageLink={fishingAnimation}
                />
            </div>) :
            <div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <Form onSubmit={() => {
                    window.alert('You have gained 5 shark fragments');
                }}>
                    <Form.Select aria-label="Default select example" className="question">
                        <option>How many bones does a shark have?</option>
                        <option value="1">136</option>
                        <option value="1">248</option>
                        <option value="1">52</option>
                        <option value="0">0</option>
                    </Form.Select>
                    <Button variant="primary" type="submit" className="question-submit" onClick={() => {
                        window.alert('You have gained 5 shark fragments')
                        props.setTrigger(false)
                    }}>
                        Submit
                    </Button>
                </Form>
            </div>
    ) : "";
}