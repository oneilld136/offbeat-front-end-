import React from 'react';
import './App.css';


const Filter = (props) => {
  return (
    <div className="filter">


      <label className="sort">
        <input type="radio" value="Play" checked={props.sortTerm==="Play"? true : ""} onChange={(event) => props.setSortTerm(event.target.value)}/>
        Play
      </label>
      <label className="sort">
        <input type="radio" className="sort" value="Eat" checked={props.sortTerm==="Eat"? true : ""} onChange={(event) => props.setSortTerm(event.target.value)}/>
        Eat
      </label>
      <label className="sort" >
        <input type="radio" className="sort" value="Culture" checked={props.sortTerm==="Culture"? true : ""} onChange={(event) => props.setSortTerm(event.target.value)}/>
        Culture
      </label>

      <br/>

      <label>
        <h4 className="sort">Neighborhood</h4>
        <select onChange={(event) => props.setFilterTerm(event.target.value)} value={props.term}>
          <option value="All">All</option>
          <option value="Williamsburg">Williamsburg</option>
          <option value="Bushwick">Bushwick</option>
          <option value="Bed-Stuy">Bed-Stuy</option>
          <option value="Flatbush">Flatbush</option>
          <option value="Crown Heights">Crown Heights</option>
          <option value="Prospect Park">Prospect Park</option>
          <option value="Red Hook">Red Hook</option>
          <option value="Coney Island">Coney Island</option>
          <option value="Dumbo">Dumbo</option>
          <option value="Greenpoint">Greenpoint</option>
          <option value="Fort Greene">Fort Greene</option>
          <option value="Gowanus">Gowanus</option>
        </select>
      </label>
      </div>
);
}


export default Filter;
