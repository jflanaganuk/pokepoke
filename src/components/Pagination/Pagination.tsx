import React from "react";
import css from "./Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage(input: number): void;
}

export function Pagination(props: PaginationProps) {
  return (
    <div className={css.pagination}>
      {Array.from(Array(props.totalPages)).map((_, index) => {
        if (props.currentPage === index)
          return (
            <p key={index} className={css.active}>
              {index + 1}
            </p>
          );
        return (
          <p key={index} onClick={() => props.setCurrentPage(index)}>
            {index + 1}
          </p>
        );
      })}
    </div>
  );
}
