import React, { useEffect, useState } from "react";
import Team from "./Team";
import { useNavigate } from "react-router-dom";
const UsersList = (props) => {
  let {
    first_name,
    last_name,
    email,
    gender,
    domain,
    available,
    imageUrl,
    id,
  } = props;
  const [cartItem, setCartItem] = useState([]);
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  const handleCart = () => {
    const newItem = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      domain: domain,
      available,
      imageUrl: imageUrl,
      id: id,
    };
    setCartItem([...cartItem, newItem]);
    alert("Added to the Team");
  };
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const handleNavigation = () => {
    navigate("/Team", { state: { cartItem } });
  };
  return (
    <div>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Id: {id}</h6>
            <h6 className="card-title">First Name: {first_name}</h6>
            <h6 className="card-title">Last Name: {last_name}</h6>
            <h6 className="card-title">Email: {email}</h6>
            <h6 className="card-title">Gender: {gender}</h6>
            <h6 className="card-title">Domain: {domain}</h6>
            <h6 className="card-title">{available}</h6>
            {available ? <button onClick={handleCart}>Add to Team</button> : ""}
            {available ? (
              <button onClick={handleNavigation}>Add to Team</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
