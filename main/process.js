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
