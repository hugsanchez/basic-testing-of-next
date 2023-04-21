"use client"
import { useEffect } from "react";

const Error = ({error, reset}: {error: Error; reset: () => void;}) => {

  useEffect(() => {
    console.error(error);
  },[error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}> Reset Error Boundary</button>
    </div>
  )
}

export default Error;