import React from "react";
import { FireworkSpinner } from "react-spinners-kit";
function Loading() {
  return (
    <section className="loading">
      <FireworkSpinner size={200} color="black"  />
      <h5 className="mb-5 text-success">Loading.......Please wait </h5>
    </section>
  );
}

export default Loading;