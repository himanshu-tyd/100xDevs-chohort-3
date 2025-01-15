import { useEffect, useState } from "react";

const Nav = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5", "Todo6"];

const NavBar = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${active}`
      );

      const data = await res.json();

      if (!res.ok) {
        return;
      }
      console.log(data);
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [active]);

  return (
    <div>
      {Nav.map((items, index) => (
        <button
          key={index}
          onClick={() => {
            if (active == 0) {
              setActive(1);
            }
            setActive(index);
          }}
          style={{ color: active === index && "red" }}
        >
          {items}
        </button>
      ))}

      <div>
        {loading ? (
          <span>Loading... </span>
        ) : (
          <span>
            <b>Todo :</b> {data.title}
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
