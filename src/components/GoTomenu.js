import React, { useState } from "react";
import "./Gotomenu.css";
import Modal from "./modal/modal";
import cart_icon from "../assets/cart_icon.png";

const productList = [
  {
    id: 1,
    image:
      "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/burger.jpeg",
    name: "Hamburger",
    price: "200$",
  },
  {
    id: 2,
    image:
      "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/coke.jpeg",
    name: "Coke",
    price: "50$",
  },
  {
    id: 3,
    image:
      "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/fries.jpeg",
    name: "Fries",
    price: "100$",
  },
  {
    id: 4,
    image:
      "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/pepsi.jpeg",
    name: "Pepsi",
    price: "20$",
  },
];

function Goto() {
  const [addProducts, setAddProducts] = useState([
    {
      id: 1,
      image:
        "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/burger.jpeg",
      name: "Hamburger",
      price: "200$",
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/coke.jpeg",
      name: "Coke",
      price: "50$",
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/fries.jpeg",
      name: "Fries",
      price: "100$",
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/pepsi.jpeg",
      name: "Pepsi",
      price: "20$",
      quantity: 1,
    },
  ]);

  const [modal, setModal] = useState(false);

  const addRemoveFunction = (index, type) => {
    console.log(index, type);
    if (type === "add") {
      if (addProducts[index].quantity >= 0) {
        let filterQuantityData = addProducts[index].quantity;
        addProducts[index].quantity = filterQuantityData + 1;
      }
    } else {
      if (addProducts[index].quantity > 1) {
        let filterQuantityData = addProducts[index].quantity;
        addProducts[index].quantity = filterQuantityData - 1;
      }
    }
  };

  // console.log(addProducts);

  return (
    <div className="content">
      <nav className="nav">
        <div className="nav_logo">
          <img
            src="https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/restaurant_24px.svg"
            alt=""
          />
          <h3>Foods Restaurent</h3>
        </div>
        <img style={{marginRight: '30px'}} src={cart_icon} width="30" alt="" onClick={() => setModal(true)} />
      </nav>

      <div className="cards">
        {productList.map((data, index) => {
          return (
            <div className="card1" key={`i+${index}`}>
              <img src={data.image} alt="burger" />
              <h4>{data.name}</h4>
              <h5>Price: {data.price}</h5>
              <span>
                <button
                  className="btn1"
                  onClick={() => addRemoveFunction(index, "add")}
                >
                  +
                </button>
                <button
                  onClick={() => addRemoveFunction(index, "substract")}
                  className="btn2"
                >
                  -
                </button>
              </span>
            </div>
          );
        })}
      </div>

      {modal ? (
        <Modal addProducts={addProducts} setModalClose={setModal} />
      ) : null}
    </div>
  );
}

export default Goto;
