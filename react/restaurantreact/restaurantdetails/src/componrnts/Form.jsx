import { useState } from "react";
import "./Form.module.css";
import { Rest } from "./Rest";

const Form = () => {
  const [formData, setFormData] = useState({
    "stars":"",
    "name": "",
    "cost_for_two":"",
    "photo":"",
    "min":"",
    "payment": {
      "card": false,
      "cash": false,
      "upi": false,
     
    
  }
});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  const payment={"cash":false, "card":false, "upi":false}
  const handleChange = (e) => {
   e.preventDefault()

    const { name, value, type, checked} = e.target;
    if (type === "checkbox"){
      payment[name]=checked;

     setFormData({...formData,payment:payment})
 
    }

    else{
      setFormData({ ...formData, [name]: value});
    }
    
  };

  return (
   
    <div className="container">
     <div>
      <Rest formData={formData} />
      </div>
      <header className="header">
        <h1 id="title" className="text-center">
          Restaurant Registration Form
        </h1>
        <p id="description" className="description text-center">
          Please enter restaurant deatails!
        </p>
      </header>

      <form id="survey-form">
        <div className="form-group">
          <label id="name-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter restautant's name"
            required
          />
        </div>

        <div className="form-group">
          <label id="number-label" htmlFor="cost_for_two">
            cost for two<span className="clue">(optional)</span>
          </label>
          <input
            type="number"
            name="cost_for_two"
            id="number"
            value={formData.cost_for_two}
            onChange={handleChange}
            className="form-control"
            placeholder="cost for two people"
          />
        </div>

        <div className="form-group">
          <label id="number-label" htmlFor="min">
            minimum cost<span className="clue">(optional)</span>
          </label>
          <input
            type="number"
            name="min"
            value={formData.min}
            onChange={handleChange}
            id="number"
            min="100"
            max="1000"
            className="form-control"
            placeholder="minimum ammount"
          />
        </div>

        <div className="form-group">
          <p>What are your ratings?</p>
          <select
            id="dropdown"
            name="stars"
            className="form-control"
            onChange={handleChange}
            required
          >
            <option disabled selected value>
              Select here
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* <div className="form-group">
          <p>Which payment methods do you accepts?</p>
          <label>
            <input
              name="user-recommend"
              value="cash"
              type="radio"
              className="input-radio"
              checked
            />Cash</label
          >
          <label>
            <input
              name="user-recommend"
              value="card"
              type="radio"
              className="input-radio"
            />Card</label
          >
    
          <label
            ><input
              name="user-recommend"
              value="upi"
              type="radio"
              className="input-radio"
            />UPI</label
          >
        </div> */}

        <div className="form-group">
          <p>
            Which payment methods do you accepts??
            <span className="clue">(Check all that apply)</span>
          </p>

          <label>
            <input
              name="cash"
              value="true"
              type="checkbox"
              className="input-checkbox"
              onChange={handleChange}
            />
            Cash
          </label>
          <label>
            <input
              name="card"
              value="true"
              type="checkbox"
              className="input-checkbox"
              onChange={handleChange}
            />
            Card
          </label>
          <label>
            <input
              name="upi"
              value="true"
              type="checkbox"
              className="input-checkbox"
              onChange={handleChange}
            />
            UPI
          </label>
        </div>

        <div className="form-group">
          <p>Other information?</p>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Enter your details here..."
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="submit"
            id="submit"
            className="submit-button"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
