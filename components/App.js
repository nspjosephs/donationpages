import React from 'react';
//import {run,SpreedlyExpress} from '../main/bloom';

//var initialized = run();
var initialized=false;
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amount:5,
      recurring:false,
      firstName: "John",
      lastName: "Doe",
      email: "someone@website.com",
      phone:"(123) 456-7890",
      country: "US",
      address: "1600 Pensylvania Ave.",
      type: "CreditCard",
      comments: "Here are some comments",
      increaseImpact:false,
      routingNumber:1234,
      accountNumber:1234
    }
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  onAmountChange(event) {
    this.setState({
      amount:event.target.value
    })
  }

  collectPayment() {

    console.log("Way to donate!");
    SpreedlyExpress.setDisplayOptions({
      "ammount":accounting.formatMoney(5),
      "full_name":"Joseph Stewart",
      "submit_label":"Donate"
    })

    SpreedlyExpress.setPaymentMethodParams({
      "email":"joseph.s@nationalschoolproject.com",
      "phone_number":"7025404883",
      "address1":"2657 Windmill Pkwy",
      "city":"Henderson",
      "state":"NV",
      "zip":"89074"
    })

    SpreedlyExpress.onPaymentMethod((token,paymentMethod) => {
      Bloomerang.CreditCard.spreedlyToken(token);
    })

    SpreedlyExpress.openView();
  }

  submit() {
    if (!window.Bloomerang.formSubmitted) {
      window.Bloomerang.formSubmitted = true;
      this.collectPayment();
    } else {
      console.log("Woah there cowboy, your form is being processed");
    }
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
          <div className="form-section">
            <h2>Donation</h2>
            <label htmlFor="amount">Amount (USD)</label>
            <input type="number" id="amount" placeholder="e.g. 10.00"/>
            <div className="section radio-container">
              <input type="checkbox" id="recurring"/>
              <label htmlFor="recurring">Show my support by making <br/> this a recurring donation</label>
              <br/>

              <div className = "conditional" id="recurring-div">
                <label htmlFor="frequency">Frequency</label>
                <select className="donation-select" id="frequency">
                  <option>Weekly</option>
                  <option selected>Monthly</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                </select>
                <br/>
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="datepicker" value="mm/dd/yyyy"/>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Contact Information</h2>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="e.g. Simeon"/>

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="e.g. Peter"/>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="e.g. you@site.com"/>

            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="e.g. (123) 456-7890"/>
          </div>

          <div className="form-section">
            <h2>Billing Address</h2>
            <label htmlFor="country">Country</label>
            <select>
              <option>Canada</option>
              <option selected>United States</option>
              <option>United Kingdom</option>
            </select>

            <label htmlFor="address">Address</label>
            <textarea placeholder="e.g. 777 Demascus Rd."></textarea>

            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="e.g. Los Angeles"/>

            <label htmlFor="state">State</label>
            <select id="state">
              <option>California</option>
              <option>Nevada</option>
            </select>

            <label htmlFor="zip">Zip Code</label>
            <input type="number" id="zip" placeholder="e.g. 90210"/>
          </div>

          <div className="form-section">
            <h2>Payment Method</h2>

            <div className="section radio-container">
              <input type="radio" name="payment" id="credit" checked/>
              <label htmlFor="credit">Credit</label>

              <input type="radio" name="payment" id="checking"/>
              <label htmlFor="checking">Checking</label>

              <input type="radio" name="payment" id="savings"/>
              <label htmlFor="savings">Savings</label>
            </div>

            <div className="conditional" id = "bank-info">
              <label htmlFor="routing">Routing Number</label>
              <input type="text" id="routing" placeholder="e.g. 123456789"/>

              <label htmlFor="account">Accounting Number</label>
              <input type="text" id="account" placeholder="e.g. 456789123456"/>
            </div>
          </div>

          <div className="form-section">
            <h2>Comments</h2>
            <textarea></textarea>
          </div>

            <button id="donate-button">Continue</button>
        </div>
      </div>
    )
  }
}
