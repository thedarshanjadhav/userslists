import { useLocation } from "react-router-dom";
const Team = () => {
  const location = useLocation();
  const data = location.state.cartItem;
  return (
    <>
      <h1>Hello Team</h1>
      <h2>this is id{data.id}</h2>
      {console.log("This is data", data)}
      {data.map((curr) => {
        {
          console.log("curr", curr);
        }
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={data.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">Id: {curr.id}</h6>
              <h6 className="card-title">
                First Name: {curr.first_name}
                {console.log(curr.first_name)}
              </h6>
              <h6 className="card-title">Last Name: {curr.last_name}</h6>
              <h6 className="card-title">Email: {curr.email}</h6>
              <h6 className="card-title">Gender: {curr.gender}</h6>
              <h6 className="card-title">Domain: {curr.domain}</h6>
              <h6 className="card-title">{curr.available}</h6>
              {/* {available ? <button onClick={handleCart}>Add to Cart</button> : ""} */}
            </div>
          </div>
        </div>;
      })}
    </>
  );
};
export default Team;
