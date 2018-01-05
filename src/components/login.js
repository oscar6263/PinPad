import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {  pin: "" };
    this.addNumber = this.addNumber.bind(this);
    this.clearPin = this.clearPin.bind(this);
    this.submitPin = this.submitPin.bind(this);
  }

  addNumber(event) {
    this.setState({pin: this.state.pin + event.target.value});
  }

  clearPin(event) {
   this.setState({ pin: "" });
  }

  submitPin(event) {
    // validate the pin here.  Go to ticktbook with a valid pin
    this.props.history.push("/ticketbook");
  }

render() {
  return (
    <div className="container">
      <div className="row content">
        <div id="col1" className="col-lg-3 col-sm-2"></div>
        <div id="col2" className="col-lg-6 col-sm-8">
          <h3 className="text-xs-center" style={{"marginTop": "30px"}}>Enter Pin</h3>
        </div>
        <div id="col3" className="col-lg-3 col-sm-2"></div>
      </div>
      <div className="row content">
        <div id="col1" className="col-lg-3 col-sm-2"></div>
        <div id="col2" className="col-lg-6 col-sm-8">
          <input id="PINbox" type="password"
            className="form-control"
            value={this.state.pin}
            disabled/>
        </div>
        <div id="col3" className="col-lg-3 col-sm-2"></div>
      </div>
      <div className="row content">
        <div id="col1" className="col-lg-3 col-sm-2"></div>
        <div id="col2" className="col-lg-6 col-sm-8">
          <input type="button" className="PINbutton" name="7" value="7" onClick={this.addNumber}/>
          <input type="button" className="PINbutton" name="8" value="8" onClick={this.addNumber}/>
          <input type="button" className="PINbutton" name="9" value="9" onClick={this.addNumber}/>
        </div>
        <div id="col3" className="col-lg-3 col-sm-2"></div>
      </div>
      <div className="row content">
        <div id="col1" className="col-lg-3 col-sm-2"></div>
        <div id="col2" className="col-lg-6 col-sm-8">
          <input type="button" className="PINbutton" name="4" value="4" onClick={this.addNumber}/>
          <input type="button" className="PINbutton" name="5" value="5" onClick={this.addNumber}/>
          <input type="button" className="PINbutton" name="6" value="6" onClick={this.addNumber}/>
        </div>
        <div id="col3" className="col-lg-3 col-sm-2"></div>
      </div>
      <div className="row content">
        <div id="col1" className="col-lg-3 col-sm-2"></div>
        <div id="col2" className="col-lg-6 col-sm-8">
          <input type="button" className="PINbutton" name="1" value="1" onClick={this.addNumber}/>
          <input type="button" className="PINbutton" name="2" value="2" onClick={this.addNumber}/>
          <input type="button" className="PINbutton" name="3" value="3" onClick={this.addNumber}/>
        </div>
        <div id="col3" className="col-lg-3 col-sm-2"></div>
      </div>
      <div className="row content">
        <div id="col1" className="col-lg-3 col-sm-2"></div>
        <div id="col2" className="col-lg-6 col-sm-8">
          <input type="button" className="PINbutton clear" value="clr" onClick={this.clearPin}/>
          <input type="button" className="PINbutton" name="0" value="0" onClick={this.addNumber}/>
          <input type="button" className="PINbutton enter" value="enter" onClick={this.submitPin}/>
        </div>
        <div id="col3" className="col-lg-3 col-sm-2"></div>
      </div>
    </div>
  );
}
}

export default Login;
