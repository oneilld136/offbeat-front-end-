import React, { Component } from 'react';
import './App.css';


class Filter extends Component {

  state = {
    value:'',
    radioButton:false
  }

  handleChange=(e)=> { this.setState({
  value  : e.target.value
  });
}

onClickAvailability=(e)=>{

            if(e.target.checked && !this.state.radioButton){
                this.setState({
                    radioButton:true,
                })
            }else if(e.target.checked && this.state.radioButton){
                this.setState({
                    radioButton:false,
                })
     }
   }

  render() {
    return (
      <div className="filter">


        <label className="sort">
          <input type="radio" onClick={this.onClickAvailability}  value="Play" name="name" checked={this.state.radioButton} checked={this.props.sortTerm==="Play"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
          Play
        </label>
        <label className="sort">
          <input type="radio" className="sort" name="name" value="Eat" checked={this.props.sortTerm==="Eat"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
          Eat
        </label>
        <label className="sort" >
          <input type="radio" className="sort" name="name" value="Culture" checked={this.props.sortTerm==="Culture"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
          Culture
        </label>
        <label className="sort" >
          <input type="radio" className="sort" name="name" value="All" checked={this.props.sortTerm==="All"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
          All


        </label>


        <br/>

        <label>
          <h3 className="hood">Neighborhood</h3>
          <select onChange={(event) => this.props.setFilterTerm(event.target.value)} value={this.props.term}>
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
  }




export default Filter;
