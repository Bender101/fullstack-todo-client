import React from "react";
import './Pagination.css'

export default function Pagination({ todosPerPage, totalTodos, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <div className="pagination-container">
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <a href="!#" className="page-link" onClick={()=> paginate(number)}>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
