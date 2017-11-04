import React from 'react';
import {run,SpreedlyExpress} from '../main/bloom';
import submit from '../main/process';

var initialized = run();
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page:0,
      amount:0,
      recurring:false,
      frequency:"",
      startDate: "mm/dd/yyyy",
      firstName: "",
      lastName: "",
      email: "",
      phone:"",
      country: "US",
      address: "",
      zip: "",
      state: "CA",
      city: "",
      type: "credit",
      comments: "",
      increaseImpact:false,
      routingNumber: 0,
      accountNumber: 0
    }
  }

  /**********************
   * PROCESSING METHODS *
   **********************/

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  /******************
   * EVENT HANDLERS *
   ******************/

  nextPage() {
    this.setState({
      page:1
    })
  }

  onAmountChange(event) {
    this.setState({
      amount:event.target.value
    })
  }

  onRecurringChange(event) {
    this.setState({
      recurring:event.target.checked
    })
  }

  onFrequencyChange(event) {
    console.log("frequency change: " + event.target.value.toLowerCase());
    this.setState({
      frequency:event.target.value.toLowerCase()
    })
  }

  onStartDateChange(event) {
    console.log("start date change: " + event.target.value);
    this.setState({
      startDate:event.target.value
    })
  }

  onFirstNameChange(event) {
    this.setState({
      firstName:event.target.value
    })
  }

  onLastNameChange(event) {
    console.log("name change: " + event.target.value);
    this.setState({
      lastName:event.target.value
    })
  }

  onEmailChange(event) {
    this.setState({
      email:event.target.value
    })
  }

  onPhoneChange(event) {
    this.setState({
      phone:event.target.value.replace(/[^0-9]/g,'')
    })
  }

  onCountryChange(event) {
    console.log("country change: " + event.target.value);
    this.setState({
      country:event.target.value
    })
  }

  onAddressChange(event) {
    console.log("address change: " + event.target.value);
    this.setState({
      address: event.target.value
    })
  }

  onCityChange(event) {
    console.log("city change: " + event.target.value);
    this.setState({
      city:event.target.value
    })
  }

  onStateChange(event) {
    console.log("state change: " + event.target.value);
    this.setState({
      state: event.target.value
    })
  }

  onZipChange(event) {
    console.log("zip change: " + event.target.value);
    this.setState({
      zip:event.target.value
    })
  }

  onRadioChange(event) {
    console.log("payment method change: " + event.target.id);
    this.setState({
      type:event.target.id
    })
  }

  onRoutingChange(event) {
    console.log("routing change: " + event.target.value)
    this.setState({
      routingNumber:event.target.value
    })
  }

  onAccountChange(event) {
    console.log("account change: " + event.target.value);
    this.setState({
      accountNumber:event.target.value
    })
  }

  onCommentsChange(event) {
    console.log("on comment change: " + event.target.value);
    this.setState({
      comments: event.target.value
    })
  }

  render() {
    var name = this.getParameterByName("name");
    return (
      <div>
        <p>Bloomerang is {initialized ? "" : "not"} all set up!</p>

        {
          name == "" || name == null ?
              <h1 className="donation-header">Donate to the National School Project</h1>
            :
              <h1 className="donation-header">Support <span className="undl">{name}</span></h1>
        }

        <div className = "form notform">

          {
            this.state.page == 0 ?
              <div className="form-section">
                <h2>Donation</h2>
                <label htmlFor="amount">Amount (USD)</label>
                <input type="number" id="amount" placeholder="e.g. 10.00" onChange={this.onAmountChange.bind(this)}/>
                <div className="section radio-container">
                  <input type="checkbox" id="recurring" onChange={this.onRecurringChange.bind(this)}/>
                  <label htmlFor="recurring">Make this a recurring donation</label>
                  <br/>

                  {this.state.recurring ?
                      <div id="recurring-div">
                        <label htmlFor="frequency">Frequency</label>
                        <select className="donation-select" id="frequency" onChange={this.onFrequencyChange.bind(this)}>
                          <option>Weekly</option>
                          <option defaultValue>Monthly</option>
                          <option>Quarterly</option>
                          <option>Yearly</option>
                        </select>
                        <br/>
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="datepicker" defaultValue="mm/dd/yyyy" onChange={this.onStartDateChange.bind(this)}/>
                      </div>
                    :
                      ""
                  }
                </div>
                <br/>
                <button id="next" onClick={this.nextPage.bind(this)}>Next</button>
              </div>
            :
              <div>
                <div className="form-section">
                  <h2>Contact Information</h2>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="e.g. Simeon" onChange={this.onFirstNameChange.bind(this)}/>

                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="e.g. Peter" onChange={this.onLastNameChange.bind(this)}/>

                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="e.g. you@site.com" onChange={this.onEmailChange.bind(this)}/>

                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" placeholder="e.g. (123) 456-7890" onChange={this.onPhoneChange.bind(this)}/>
                </div>

                <div className="form-section">
                  <h2>Billing Address</h2>
                  <label htmlFor="country">Country</label>
                  <select onChange={this.onCountryChange.bind(this)}>
                    <option>Canada</option>
                    <option defaultValue>United States</option>
                    <option>United Kingdom</option>
                  </select>

                  <label htmlFor="address">Address</label>
                  <textarea placeholder="e.g. 777 Demascus Rd." onChange={this.onAddressChange.bind(this)}></textarea>

                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="e.g. Los Angeles" onChange={this.onCityChange.bind(this)}/>

                  <label htmlFor="state">State</label>
                  <select id="state" onChange={this.onStateChange.bind(this)}>
                    <option>California</option>
                    <option>Nevada</option>
                  </select>

                  <label htmlFor="zip">Zip Code</label>
                  <input type="number" id="zip" placeholder="e.g. 90210" onChange={this.onZipChange.bind(this)}/>
                </div>

                <div className="form-section">
                  <h2>Payment Method</h2>

                  <div className="section radio-container">
                    <input type="radio" name="payment" id="credit" defaultChecked onChange={this.onRadioChange.bind(this)}/>
                    <label htmlFor="credit">Credit</label>

                    <input type="radio" name="payment" id="checking" onChange={this.onRadioChange.bind(this)}/>
                    <label htmlFor="checking">Checking</label>

                    <input type="radio" name="payment" id="savings" onChange={this.onRadioChange.bind(this)}/>
                    <label htmlFor="savings">Savings</label>
                  </div>

                  {
                    this.state.type !="credit" ?
                      <div id = "bank-info">
                        <label htmlFor="routing">Routing Number</label>
                        <input type="text" id="routing" placeholder="e.g. 123456789" onChange={this.onRoutingChange.bind(this)}/>

                        <label htmlFor="account">Account Number</label>
                        <input type="text" id="account" placeholder="e.g. 456789123456" onChange={this.onAccountChange.bind(this)}/>
                      </div>
                    :
                      ""
                  }
                </div>

                <div className="form-section">
                  <h2>Comments and Prayer Requests</h2>
                  <textarea onChange={this.onCommentsChange.bind(this)}></textarea>
                </div>

                <button id="donate-button" onClick={() => submit(SpreedlyExpress,this.state)}>{this.state.type=="credit" ? "Enter Payment Info" : `Donate $${this.state.amount} ${this.state.recurring ? "per month" : ""}`}</button>
              </div>
          }
        </div>
      </div>
    )
  }
}
