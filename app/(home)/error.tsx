"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Oups, une erreur est survenue !
      </h2>
      <p className="mb-6">{error.message}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Réessayer
      </button>
    </div>
  );
}

export default ErrorPage;
