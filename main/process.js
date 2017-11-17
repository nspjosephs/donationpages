import moment from "moment";

function collectPayment(state,onError) {

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

    if (state.type.toLowerCase() == "credit") {
      SpreedlyExpress.onPaymentMethod((token,paymentMethod) => {
        Bloomerang.CreditCard.spreedlyToken(token);

        if (state.recurring) {
          Bloomerang.Api.recurringDonate();
        } else {
          Bloomerang.Api.donate();
        }

      })
      SpreedlyExpress.openView();
    } else {
      if (state.recurring) {
        Bloomerang.Api.recurringDonate();
      } else {
        Bloomerang.Api.donate();
      }
    }
  } else {
    console.log("Responses not validated...");
  }
}

function configureBloomerang(state) {
  let Bloomerang = window.Bloomerang;

  Bloomerang.Account.individual()
    .firstName(state.firstName)
    .lastName(state.lastName)
    .homePhone(state.phone)
    .homeEmail(state.email)
    .homeAddress(
      state.address,
      state.city,
      state.state,
      state.zip,
      state.country
    )

  if (state.recurring) {
    /* DONATION IS RECURRING */
    Bloomerang.RecurringDonation
      .amount(state.amount)
      .frequency(state.frequency)
      .note(state.comments)
      .startDate(moment(state.date).format("YYYY-MM-DD"));
  } else {
    /* DONATION IS SINGLE TIME */
    Bloomerang.Donation
      .amount(state.amount)
      .note(state.comments)
  }
}

function validateResponses(state) {
  state.amount = parseInt(state.amount);

  if (amount <= 0) {
    onError("INVALID_AMOUNT");
    return false;
  }
}

export default function submit(state) {
  console.log("calling submit");
  if (SpreedlyExpress.DEBUGGING) {
      console.log("SpreedlyExpress is debugging, returning false...");
      console.log(state);
      return false;
  }
  if (!window.Bloomerang.formSubmitted) {
    window.Bloomerang.formSubmitted = true;
    collectPayment(state);
  } else {
    console.log("Woah there cowboy, your form is being processed");
  }
}
