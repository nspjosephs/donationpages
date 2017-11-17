import moment from "moment";

function collectPayment(state,onError) {

  console.log("---- Collecting Payment For State ----");
  console.log(state);
  console.log("--------------------------------------");

  if (validateResponses(state)) {
    console.log("Collecting donation...");

    Bloomerang.Widget.Donation.OnSubmit = () => configureBloomerang(state);
    Bloomerang.Api.OnSubmit = Bloomerang.Widget.Donation.OnSubmit;
    Bloomerang.Widget.Donation.OnSuccess = () => console.log("Donation was successfull!");
    Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess;
    Bloomerang.Widget.Donation.OnError = (error) => console.log(error);
    Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError;

    SpreedlyExpress.setDisplayOptions({
      "amount":accounting.formatMoney(state.amount),
      "full_name":"Joseph Stewart",
      "submit_label":"Donate",
      "name_label":"Your Name",
      "sidebar_bottom_description":"Support Hannah McLaughlin"
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

      });

      SpreedlyExpress.onViewClose(() => {
        Bloomerang.formSubmitted = false;
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
  console.log("Configuring bloomerang donation");

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
    console.log("Donation is reucurring");
    Bloomerang.RecurringDonation
      .amount(state.amount)
      .frequency(state.frequency)
      .note(state.comments)
      .startDate(moment(state.date).format("YYYY-MM-DD"));
  } else {
    /* DONATION IS SINGLE TIME */
    console.log("Donation is non recurring");
    Bloomerang.Donation
      .amount(state.amount)
      .note(state.comments)
  }
}

function validateResponses(state) {
  let amount = parseInt(state.amount);

  if (amount <= 0) {
    onError("INVALID_AMOUNT");
    return false;
  }

  return true;
}

export default function submit(state) {
  console.log("calling submit");
  if (Bloomerang.isDebugging || SpreedlyExpress.DEBUGGING) {
      console.log("SpreedlyExpress is debugging, returning false...");
      console.log(state);
      return false;
  }
  if (!Bloomerang.SpreedlyScriptInitialized) {
    console.log("SpreedlyExpress is not initialized, initializing now");
    SpreedlyExpress.onInit(() => {
      console.log("Spreedly Initilized...");
    });
    SpreedlyExpress.init('OqOMv1ksjPtXEYHtCYsVXzEpCbR', { 'company_name':'National School Project' });
    Bloomerang.SpreedlyScriptInitialized = true;
  }
  if (!window.Bloomerang.formSubmitted) {
    window.Bloomerang.formSubmitted = true;
    collectPayment(state);
  } else {
    console.log("Woah there cowboy, your form is being processed");
  }
}
