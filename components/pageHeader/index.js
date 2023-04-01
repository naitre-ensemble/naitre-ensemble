import React from "react";

export default function PageHeader({ title, items }) {
  return (
    <div className="h-auto pt-12 pb-12" style={{ background: "#dec3b4" }}>
      <h1 className="pl-32 pr-32 text-center text-white text-3xl leading-relaxed">
        {title}
      </h1>
      <div className="flex justify-center mt-3">
        <img
          className="w-auto h-20"
          src="/img/v203-white.png"
          alt="Naitre ensemble"
        />
      </div>

      <div className="flex gap-12 justify-center text-white">
        {items.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
}
