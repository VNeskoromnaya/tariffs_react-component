import { useState } from 'react';
import './App.css';
import Card from './components/Card';
// import Test from './components/Test';


const cards = [
    { title: 'Безлимитный 300', price: '300', speed: '10'},
    { title: 'Безлимитный 450', price: '450', speed: '50'},
    { title: 'Безлимитный 550', price: '550', speed: '100'},
    { title: 'Безлимитный 1000', price: '1000', speed: '200'}
    ];

function App() {

  const [isSelected, setIsSelected] = useState();

  const handleClick = (isSelected) => {
    setIsSelected(isSelected); 
  }

  return (
    <div className="App">

      <div className="card-wrapper">
      
      {
          cards.map((card, index) =>
          <Card key={index} index={index} title={card.title} price={card.price} speed={card.speed} isSelected={index === isSelected} onClick={handleClick}></Card>
          )
        }
      {/* {
          cards.map((card, index) =>
          <Card key={index} index={index} title={card.title} price={card.price} speed={card.speed} isSelected={card.isSelected}></Card>
          )
        } */}
      </div>
    </div>
  );
}

export default App;
