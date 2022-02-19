import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  width?: string;
}

export const Card = ({ title, children, width = "w-3/5" }: Props) => {
  return (
    <div className={`card ${width} bg-base-100 shadow-xl bg-slate-50`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};
