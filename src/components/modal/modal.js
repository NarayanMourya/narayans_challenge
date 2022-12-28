import { useNavigate } from "react-router-dom";
import "./modal.css";

const Modal = ({ addProducts, setModalClose }) => {
  const navigate = useNavigate();
  return (
    <div className="modal_backgrond">
      <h4>Order Summary</h4>

      <div className="product_list">
        {addProducts.map((data, index) => {
          return (
            <div key={`i+${index}`} className="product_item">
              <div className="product_name">
                <p>{data.name}</p> <p>{data.quantity}</p>
              </div>
              <div>
                <button className="plus_btn">+</button>
                <button className="minus_btn">-</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer_btns">
        <button className="saveBtn" onClick={() => navigate("/checkout")}>Save and Checkout</button>
        <button onClick={() => setModalClose(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
