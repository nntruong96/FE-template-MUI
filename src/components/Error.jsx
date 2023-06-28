/* eslint-disable react/prop-types */
import React from 'react';

export default function Error({ children }) {
  return (
    <div className="mt-20 text-danger">
      <small>{children}</small>
    </div>
  );
}
