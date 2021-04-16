import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/Card';
import * as PT from 'prop-types'

function App() {
  return <div>
<CardDeck style={{display: 'flex', flexDirection: 'row'}} >
<CustomCard widthStyle={"25rem"} cardPicture={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Road_and_nature_of_beautifull_Bangladesh_village.jpg/320px-Road_and_nature_of_beautifull_Bangladesh_village.jpg"}/>
<CustomCard featuredText={"featured"} widthStyle={"18rem"}/>
    <CustomCard children={"Something"} widthStyle={"18rem"} footerText={"Sales ends"}/>

</CardDeck>
  </div>
}

CustomCard.propTypes = {
   featuredText: PT.string,
   cardPicture: PT.string,
   footerText: PT.string,
   widthStyle: PT.string,
   children: PT.node.isRequired
}

CardDeck.propTypes = {
    style: PT.object
}

function CustomCard({children, featuredText, cardPicture, footerText, widthStyle}) {
  return <Card style={{ width: `${widthStyle}` }}>
   <Card.Header>{featuredText}</Card.Header>
  <Card.Img variant="top" src={cardPicture} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        {children}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
   <Card.Footer>{footerText}</Card.Footer>
</Card>
}



export default App
