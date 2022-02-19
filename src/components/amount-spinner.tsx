import React from "react";
import "./amount-spinner.css";

interface Props {}

export const AmountSpinner = ({}: Props) => {
  return (
    <>
      <div className="amount-spinner w-24 text-xl">
        <label htmlFor="email" className="text-sm block font-bold  pb-2">
          Min. Amount
        </label>
        <input
          type="number"
          name="number"
          min={0}
          step={0.1}
          id=""
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
          placeholder="bill"
        />
      </div>
    </>
  );
};
