import React, { Component } from 'react';

class Addition extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberX:null,
      numberY:null,
      numberSum:'',
    }
  }

    onChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value})
    }

    result = () =>{
      var sum = parseInt(this.state.numberX) + parseInt(this.state.numberY)
      this.setState({
        numberSum: sum
      })
    }

  render() {
    return (
      <div className="addition-container">
        <div className="container">
          Enter a number:
          <div className="add-parent">
            <h3>ADDITION : </h3>
            <div className="addition-class">
              <input type="text" placeholder="Enter x.." className="input-one  form-control" name="numberX" onChange={this.onChange} />
              <input type="text" placeholder="Enter y.." className="input-two form-control"  name="numberY"  onChange={this.onChange} />
              <button className="btn btn-class btn-primary" onClick={this.result}>Add</button>
            </div>
            <h3>SUM : </h3>
            <input type="text" placeholder="Sum..." className="input-two form-control"  value={this.state.numberSum}  onChange={this.onChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Addition;
