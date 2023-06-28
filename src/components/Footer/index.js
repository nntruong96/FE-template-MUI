import React from 'react';
import moment from 'moment';
export default function index() {
  return (
    <div className="copy__right__content d-flex gap-4 flex-wrap mt-40">
      <p>{moment().year()} © Copyright - Template</p>
      <div className="privacy__link">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  );
}
