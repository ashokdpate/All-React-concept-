import "./Card.css";
import { Link } from "react-router-dom";
function Card({ image, title, price ,id}) {
  return (
    <div className="card">
      <img src={image} width="100%" height={200} />
      <h3>{title}</h3>
      <p>$ {price}</p> 
      <Link to={`/productdetails/${id}`}>
      <button>Product Details</button>
      </Link>
    </div>
  );
}
export default Card;