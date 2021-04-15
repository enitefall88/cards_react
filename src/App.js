import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return <div>
<CustomCard/>
<CustomCard featuredText={"featured"}>

</CustomCard>
  </div>
}

function CustomCard({featuredText}) {
  return <Card style={{ width: '18rem' }}>
   <Card.Header>{featuredText}</Card.Header>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Road_and_nature_of_beautifull_Bangladesh_village.jpg/320px-Road_and_nature_of_beautifull_Bangladesh_village.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
}



export default App
