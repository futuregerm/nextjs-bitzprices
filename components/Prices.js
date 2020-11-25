import { useState } from "react";

export default function Prices({ bpi }) {
  const [state, setState] = useState({
    currency: "USD",
  });

  let description = "";
  let code = "";
  let rate = "";

  if (state.currency === "USD") {
    description = bpi.USD.description;
    code = bpi.USD.code;
    rate = bpi.USD.rate;
  } else if (state.currency === "GBP") {
    description = bpi.GBP.description;
    code = bpi.GBP.code;
    rate = bpi.GBP.rate;
  } else if (state.currency === "EUR") {
    description = bpi.EUR.description;
    code = bpi.EUR.code;
    rate = bpi.EUR.rate;
  }

  return (
    <div>
      <ul className="list-group mb-3">
        <li className="list-group-item">
          Bitcoin rate for {description}:{" "}
          <span className="badge badge-primary">{code}</span>{" "}
          <strong>{rate}</strong>
        </li>
      </ul>
      <select
        className="form-control"
        onChange={(e) => setState({ currency: e.target.value })}
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}
