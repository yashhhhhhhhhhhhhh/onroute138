import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>

      <div className="order-box">
        <div className="order-box-header">
          <h1>Order History</h1>
        </div>
        <p className="order">
          Order 1506: 2 Flatbeds:{"  "}
          <a href="" className="in-progress">
            IN PROGRESS
          </a>
        </p>
        <br></br>
        <p className="order">
          Order 1505: 3 Flatbeds:{"  "}
          <a href="" className="complete">
            COMPLETE
          </a>
        </p>
      </div>
    </>
  );
}
