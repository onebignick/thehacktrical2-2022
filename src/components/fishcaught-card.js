import Card from 'react-bootstrap/Card';
export function FishCaughtCard(props) {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.imageLink} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
}