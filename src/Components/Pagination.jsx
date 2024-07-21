import React from "react";
import Button from "./Button";
const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div>
      {goToPreviousPage && (
        <Button onClick={goToPreviousPage} text="Previous" />
      )}
      {goToNextPage && <Button onClick={goToNextPage} text="Next" />}
    </div>

    //   {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
    //   {goToNextPage && <button onClick={goToNextPage}>Next</button>}
  );
};

export default Pagination;
