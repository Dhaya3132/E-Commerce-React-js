import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css';
import card1 from './product1.png';
import card2 from './Product2.png';
import card3 from './Product3.png';
import card4 from './9507.jpg';



export default class Details extends Component {
  render() {
    return (   
      <div>      
        <p className='Text1'>Explore products</p>
        <div className="container1">
            <div className="inner-container">
            <div className="buttton-card">
              <div className="button1">
                <Card style={{ width: '18rem' }} className='CARD1'>
                   <Card.Img variant="top" src={card1} className='card-image1' />
                     <Card.Body className='card-title1'>
                        <Card.Title>Red Arm Chair Cushon</Card.Title>
                           <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of the card's content.
                           </Card.Text>
                           <div className="dons">
                            
                           <Button variant="primary" className='but'>Buy now</Button>
                           </div>
                     </Card.Body>
                 </Card>
              </div>

              <div className="button2">
                <Card style={{ width: '18rem' }} className='CARD1'>
                   <Card.Img variant="top" src={card2} className='card-image1' />
                     <Card.Body className='card-title1'>
                        <Card.Title>White Arm Chair Cushon</Card.Title>
                           <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of the card's content.
                           </Card.Text>
                           <div className="dons">
                           <Button variant="primary" className='but'>Buy now</Button>
                           
                           </div>
                     </Card.Body>
                 </Card>
              </div>


              <div className="button3">
                <Card style={{ width: '18rem' }} className='CARD1'>
                   <Card.Img variant="top" src={card3} className='card-image1' />
                     <Card.Body className='card-title1'>
                        <Card.Title>White Arm Chair Cushon</Card.Title>
                           <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of the card's content.
                           </Card.Text>
                           <div className="dons">
                           <Button variant="primary" className='but'>Buy now</Button>
                  
                           </div>
                     </Card.Body>
                 </Card>
              </div>

              <div className="button4">
                <Card style={{ width: '18rem' }} className='CARD1'>
                   <Card.Img variant="top" src={card4} className='card-image1' />
                     <Card.Body className='card-title1'>
                        <Card.Title>Red Arm Chair Cushon</Card.Title>
                           <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of the card's content.
                           </Card.Text>
                           <div className="dons">
                           <Button variant="primary" className='but'>Buy now</Button>
                           
                           </div>
                     </Card.Body>
                 </Card>
              </div>



            </div>

            </div>
        </div>
      </div>
    )
  }
}
