import React from 'react';
import { Link } from 'react-router-dom';
import initialState from '../../redux/initialState';

const Categories = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
      <h2 className="text-center">Categories</h2>
      <ul className="list-group">
        {initialState.categories.map((cat) => (
          <li key={cat} className="list-group-item">
            <Link to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Categories;
