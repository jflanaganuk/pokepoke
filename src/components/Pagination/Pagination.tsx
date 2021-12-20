import React from "react";
import css from "./Pagination.scss";
import { Link } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination(props: PaginationProps) {
  return (
    <div className={css.pagination}>
      {Array.from(Array(props.totalPages)).map((_, index) => {
        return (
          <Link
            to={`/${index}`}
            key={index}
            className={props.currentPage === index && css.active}
          >
            {index + 1}
          </Link>
        );
      })}
    </div>
  );
}
