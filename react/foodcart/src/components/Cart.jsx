
function Cart( {image,price,p2,name}) {
    return (
      <div className="main">
<div className="card1">
  <img src={image} alt="pizza" className="img"/>
  </div>
  <div className="card1">
  <div className="card2 title">
  <h2 className="name">{name} </h2>
  <button className="red"></button>
  <button className="yellow"></button>
  </div>
  <p className="gray card2" style={{fontWeight: "normal"}}>premium pepperoni and cheese is made with real mozzerella on original hand-tossed crust.</p>
  <div className="card2 gray">
  <span>265 Cal</span>
  <span>P/F/C: 12/10/31</span>
  <span>53.8'C</span>
  </div>
  <div className="card2">
  <h2 className="price1">{price}</h2>
  <h3 className="price2"><strike>{p2}</strike></h3>
  <span><button className="order">Order</button></span>
  </div>
</div>
</div>
);
}

export default Cart;