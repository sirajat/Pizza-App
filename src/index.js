import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData; 
  // const pizzas = []
  const numPizzas = pizzaData.length;
  console.log(numPizzas);
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {/* <Pizza name="Pizza Spinaci" /> */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((value) => (
            <Pizza
              key={value.name}
              name={value.name}
              ingredients={value.ingredients}
              price={value.price}
              photoName={value.photoName}
              soldOut={value.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>
          Sorry, we're currently working on our menu. Please wait some time.
        </p>
      )}
    </main>
  );
}


function Pizza(props) {

  // if (props.soldOut) return (
  //   null
  // )                          // This condition Items will not display if stock is sold out
  return (
    <li className={`pizza ${props.soldOut ? "sold-out": ""}`}>
      <img src={props.photoName}></img>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.ingredients}</h4>
        <p>${props.price}</p>
        <span>{ props.soldOut ? "Sold Out" : ""}</span>
      </div>
    </li>
  );
}

function Footer() {

  const hour = new Date().getHours()
  const openHour = 9;
  const closeHour = 22;
  const open = hour >= openHour && hour <= closeHour
  console.log(open);
  return (
    <div>
      <footer className="footer">{new Date().toDateString()}. We are currently {open ? "Open" : "Close"} now</footer>
      <button className="btn">Order</button>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
