import { useState } from "react";
import { CardButton } from './card';
import fishingAnimation from '../media/fishing-animation.gif';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./quizResult.css"

export function QuizPopup(props) {
    return (props.trigger) ? (
        (props.result) ? (
            <div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <CardButton
                    className="fish-card"
                    title="Fish Caught!"
                    text="You gained 100 coins"
                    imageLink={fishingAnimation}
                />
            </div>) :
            <div>
                <button className="close-btn-question" onClick={() => props.setTrigger(false)}>X</button>
                <Form onSubmit={() => {
                    window.alert('You have gained 5 shark fragments');
                }}>
                    <Form.Select aria-label="Default select example" className="question">
                        <option>How many bones does a shark have?</option>
                        <option value="1">200</option>
                        <option value="1">478</option>
                        <option value="1">145</option>
                        <option value="0">None</option>
                    </Form.Select>
                    <Button variant="primary" type="submit" className="question-submit">
                        Submit
                    </Button>
                </Form>
            </div>
    ) : "";
}