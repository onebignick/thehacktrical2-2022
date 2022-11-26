import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './quiz.css'

export function CardButton(props) {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.imageLink} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button  className="Buy-btn" variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    );
}