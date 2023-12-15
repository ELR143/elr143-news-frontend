import React from "react";

export default function Error({ title, message }) {
  return (
    <section className='error'>
      <h2>{title}</h2>
      <h3>{message}</h3>
    </section>
  );
}
