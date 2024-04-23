import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card className="text-center">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <Card.Title>Thanks for your support!</Card.Title>
        <Card.Text>
          Ciao sono un footer molto gentile
        </Card.Text>
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
      <Card.Footer className="text-muted">EpicBookShop</Card.Footer>
    </Card>
  );
}
export default MyFooter;