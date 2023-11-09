import { useState } from "react";
import { data } from "./data";

const Form = () => {
  const [search, setSearch] = useState("");
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ border: "1px solid grey", width: "100%" }}
        />
      </form>
      <br />
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          })
          .map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
      </tbody>
    </div>
  );
};

export default Form;
