import './App.css';
import Card from './components/Card';


// const cards = [
//   { title: 'Безлимитный 300', price: '300', speed: '10', color: 'lazur'},
//   { title: 'Безлимитный 450', price: '450', speed: '50', color: 'green'},
//   { title: 'Безлимитный 550', price: '550', speed: '100', color: 'red', isSelected: true},
//   { title: 'Безлимитный 1000', price: '1000', speed: '200', color: 'black'}
//   ];

  const cards = [
    { title: 'Безлимитный 300', price: '300', speed: '10'},
    { title: 'Безлимитный 450', price: '450', speed: '50'},
    { title: 'Безлимитный 550', price: '550', speed: '100',isSelected: true},
    { title: 'Безлимитный 1000', price: '1000', speed: '200',}
    ];

function App() {
  return (
    <div className="App">
      <div className="card-wrapper">
      {
          cards.map((card, index) =>
          <Card key={index} title={card.title} price={card.price} speed={card.speed} isSelected={card.isSelected}></Card>
          )
        }
      </div>
    </div>
  );
}

export default App;
