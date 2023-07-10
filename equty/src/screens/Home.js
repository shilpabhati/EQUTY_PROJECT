import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

function Home() {
    const cardData = [
        {
          title: 'Card 1',
          content: 'Some quick example text for Card 1.',
        },
        {
          title: 'Card 2',
          content: 'Some quick example text for Card 2.',
        },
        {
          title: 'Card 3',
          content: 'Some quick example text for Card 3.',
        },
        {
          title: 'Card 3',
          content: 'Some quick example text for Card 3.',
        },
        {
          title: 'Card 3',
          content: 'Some quick example text for Card 3.',
        }
      ];
  return (
    <div>
    <NavBar />
      <div className="container">
      <span className="badge text-wrap bg-dark my-3 mx-3"> <h6>Upcoming sessions</h6></span>
      <div className="row">
      {cardData.map((card, index) => (
        <div className="col-sm-4" key={index} >
          <Card title={card.title} content={card.content} />
        </div>  
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home