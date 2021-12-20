import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage(input: number): void;
}

export function Pagination(props: PaginationProps) {
  return (
    <div>
      {Array.from(Array(props.totalPages)).map((_, index) => {
        if (props.currentPage === index) return <p>{index + 1}</p>;
        return <p onClick={() => props.setCurrentPage(index)}>{index + 1}</p>;
      })}
    </div>
  );
}
