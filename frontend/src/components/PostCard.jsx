import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostCard = (props) => {
  const {id=0, image='', title='', rating, price='', description=''} = props;
  return (
    <div>
      <Card style={{margin: '60px auto 0 ', width: '25rem', boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> <h4>{title} </h4></Card.Title>
          <Card.Text> Rating :  {rating?.rate || ''}/5 </Card.Text>
          <Card.Text> Price : $ {price} </Card.Text>
          <Card.Text> {description} </Card.Text>
          <Button variant="primary"> Enquire </Button>
        </Card.Body>
      </Card>
    </div>  
  )
}

export default PostCard