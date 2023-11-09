import React from "react";

const Navigation = ({ postPerPage, totalPosts, paginateNa }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{margin: '10px'}}>
        {pageNumbers.map((number) => (
          <li style={{display: 'inline', padding: '10px', border: '1px solid grey'}} key={number}>
            <a onClick={()=> paginate(number)} href="#">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
