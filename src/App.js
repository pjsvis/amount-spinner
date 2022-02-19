import React from "react";
import { Button } from "./button";
import { Card } from "./components/card";
import { AmountSpinner } from "./components/amount-spinner";

function App() {
  const btn = `
bg-blue-500 
hover:bg-blue-700 
text-white 
font-bold 
py-2 px-4 
rounded 
focus:outline-none 
focus:shadow-outline`;

  return (
    <div className="m-4">
      <Card title={"Hello Card"}>
        <form action="">
          <div className="px-4 pb-4">
            <AmountSpinner />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              PASSWORD
            </label>
            <input
              type="password"
              name="email"
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <div className="justify-end card-actions">
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
            {/* <button className={btn + " ml-2"} type="button">
              Sign In
            </button>
            <Button className="ml-2">Butt on</Button>
            <div className="mt-2">
              <button className="btn btn-info btn-sm ml-2">Button</button>
              <button className="btn btn-success btn-sm ml-2">Button</button>
              <button className="btn btn-warning btn-sm ml-2">Button</button>
            </div> */}
          </div>
        </form>
      </Card>
    </div>
  );
}

export default App;
