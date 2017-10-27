import React from 'react';
import {run,SpreedlyExpress} from './bloom';

run();
export default class App extends React.Component {

  collectPayment() {

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

  render() {
    return (
      <div>
        <p>H3ll0 W0rld</p>
        <button onClick={this.collectPayment.bind(this)}>Click me!</button>
      </div>
    )
  }
}
