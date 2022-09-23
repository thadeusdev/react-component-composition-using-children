import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Extract smaller child components from this large App component
// Consider:
// - Single Responsibility (what is this part of code meant to do?)
// - Reusability (is the same code repeated?)
// - Complexity (is there too much information being contained within one component? this is subjective!)

function EmojiButton(props) {
  
  return (
    <button>
      <span role="img">{props.emoji}</span>
      {props.labelText}
    </button>
  )
}

function Header() {
  return (
    <header>
      <h1>PetLand</h1>
      <nav>
        <EmojiButton emoji="👤" labelText="Login" />
      </nav>
    </header>
  )
}

function Card(props){
  console.log(props)
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {props.children}      
    </div>
  )
}

function HomePage() {
  return (
    <main>
      <Card title="Welcome to PetLand!">
        <em>Find your dream pet</em>
      </Card>
      <Card title="What pets would you like to see?">
        <div>
          <EmojiButton emoji="😸" labelText="Cats" />
          <EmojiButton emoji="🐕" labelText="Dogs" />
        </div>
      </Card>
    </main>
  )
}
 
function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
