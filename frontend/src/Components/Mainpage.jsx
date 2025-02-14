import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>

      <div className="order-box">
        <h2>Order History</h2>
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
