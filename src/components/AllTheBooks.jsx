
import Card from 'react-bootstrap/Card';
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const AllTheBooks = () => {
   fantasy.map((book) => {
      return (
        <Card style={{ width: "18rem" }} key={`book-${book.asin}`}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      );
    });
    history.map((book) => {
        return (
          <Card style={{ width: "18rem" }} key={`book-${book.asin}`}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      });
      horror.map((book) => {
        return (
          <Card style={{ width: "18rem" }} key={`book-${book.asin}`}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      });
      romance.map((book) => {
        return (
          <Card style={{ width: "18rem" }} key={`book-${book.asin}`}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      });
      scifi.map((book) => {
        return (
          <Card style={{ width: "18rem" }} key={`book-${book.asin}`}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      });
  };
  
  export default AllTheBooks;
