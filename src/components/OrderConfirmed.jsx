import { useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Order Confirmed</h2>
      <button onClick={() => navigate(-1)}>Back to Home page</button>
    </div>
  );
};

export default OrderConfirmed;
