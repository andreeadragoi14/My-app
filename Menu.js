import './App.css';

function Menu() {
  return (
    <main className="Menu">
      <div className="specials-button">
<h3>This week specials!</h3>
<button>Online Menu</button>
      </div>
<div className="dish">
<div className="dish-name">
  <img src="icons_assets/greeksalad.jpg" />
  <h3>Greel Salad</h3>
  <p className="price">$12.99</p>
  <p className="food-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
  <h4>Order a delivery</h4>
</div>

<div className="dish-name">
  <img src="icons_assets/bruschetta.svg" />
  <h3>Bruschetta</h3>
  <p className="price">$5.99</p>
  <p className="food-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
  <h4>Order a delivery</h4>
</div>

<div className="dish-name">
  <img src="icons_assets/lemondessert.jpg" />
  <h3>Lemon Dessert</h3>
  <p className="price">$5.00</p>
  <p className="food-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
  <p className="order-a-delivery">Order a delivery</p>
</div>
</div>

</main>
  )
}

export default Menu;