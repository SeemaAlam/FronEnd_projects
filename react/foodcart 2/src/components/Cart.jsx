
import clip1 from './clipart20621.png'

function Cart({ date, logo, heading, subheading, devices, backgroundColor }) {
  return (
    <div style={{backgroundColor}} className="main">
    <div className="right">
    <div className="right1">
    <p className="date">{date}</p>
    </div>
      <img src={logo} alt="apple"></img>
    </div>
     
      <button>Case Study</button>
      <p className="heading">{heading}</p>
      <p className="heading">{subheading}</p>
      <div className="right">
      <div className="right1">
      <p>{devices}</p>
      </div>
      <img src={clip1} alt="arrow" className="arrow"></img>
      </div>
    </div>
  );
}

export default Cart;
