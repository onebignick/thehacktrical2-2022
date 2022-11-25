import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardButton(props) {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.imageLink} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    );
}