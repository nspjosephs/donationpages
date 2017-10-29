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
    return (
      <div>
        <p>Bloomerang is {initialized ? "" : "not"} all set up!</p>
        <p>Amount: {this.state.amount}</p>

        <div>
          <label htmlFor="amount">Amount: </label>
          <input type="text" id="amount" onChange={this.onAmountChange.bind(this)} value={this.state.amount}/>
        </div>

        <div>
          <button onClick={this.submit.bind(this)}>Click me to submit!</button>
        </div>
      </div>
    )
  }
}
