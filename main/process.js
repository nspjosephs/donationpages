function collectPayment(SpreedlyExpress,state,onError) {

  if (validateResponses(state)) {
    console.log("Collecting donation...");

    configureBloomerang(state);

    SpreedlyExpress.setDisplayOptions({
      "ammount":accounting.formatMoney(state.amount),
      "full_name":"Joseph Stewart",
      "submit_label":"Donate"
    })

    SpreedlyExpress.setPaymentMethodParams({
      "email":state.email,
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
  } else {
    console.log("Responses not validated...");
    onError();
  }
}

function configureBloomerang(state) {

}

function validateResponses(state) {
  return false;
}

export default function submit(SpreedlyExpress,state) {
  console.log("calling submit");
  if (SpreedlyExpress.DEBUGGING) {
      console.log("SpreedlyExpress is debugging, returning false...");
      console.log(state);
      return false;
  }
  if (!window.Bloomerang.formSubmitted) {
    window.Bloomerang.formSubmitted = true;
    this.collectPayment(SpreedlyExpress,state);
  } else {
    console.log("Woah there cowboy, your form is being processed");
  }
}
