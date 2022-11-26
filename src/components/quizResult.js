import { useState } from "react";
import { CardButton } from './card';
import fishingAnimation from '../media/fishing-animation.gif';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function QuizPopup(props) {
    return (props.trigger) ? (
        (props.result) ? (
            <div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <CardButton
                    className="card"
                    title="Fish Caught!"
                    text="You gained 100 coins"
                    imageLink={fishingAnimation}
                />
            </div>) :
            <div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <Form onSubmit={() => {
                    window.alert('You have gained x coin');
                }}>
                    <Form.Select aria-label="Default select example">
                        <option>How many bones does a shark have?</option>
                        <option value="1">200</option>
                        <option value="1">478</option>
                        <option value="1">145</option>
                        <option value="0">None</option>
                    </Form.Select>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
    ) : "";
}