import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
