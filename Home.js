import './App.css';

function Home() {
  return (
    <main className="Home">
       <div className="home-description">
    <h1>Little Lemon Restaurant</h1>
    <h2>Chicago</h2>
    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <button className="booking-table">Reserve a table</button>
        </div>
        <div>
    <img src="icons_assets/restauranfood.jpg" />
        </div>
    </main>
  );
}

export default Home;
