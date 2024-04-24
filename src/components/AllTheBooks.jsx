
import Card from 'react-bootstrap/Card';
import fantasy from "../data/fantasy.json";


const AllTheBooks = () => { return (<>{fantasy.map((book) => {
      return (
        <Card style={{ width: "18rem" }} key={`book-${book.asin}`}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      )
    })}</>)}
  
  
  export default AllTheBooks;
