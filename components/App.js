import React from 'react';
import {run,SpreedlyExpress} from 'bloom';

run();
export default class App extends React.Component {

  collectPayment() {
    SpreedlyExpress.onPaymentMethod((token,paymentMethod) => {
      Bloomerang.CreditCard.spreedlyToken(token);
    })
  }

  render() {
    return (
      <div>
        <p>H3ll0 W0rld</p>
        <button onclick={this.collectPayment.bind(this)}>Click me!</button>
      </div>
    )
  }
}
