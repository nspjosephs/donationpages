import moment from "moment";
import {calcImpact, getParameterByName} from './bloom';

function collectPayment(state,onInvalid, onSuccess, onFail) {

  let name=getParameterByName("name");
  if (validateResponses(state, onInvalid)) {
    console.log("Collecting donation...");
    window.Bloomerang.formSubmitted = true;

    Bloomerang.Widget.Donation.OnSubmit = () => configureBloomerang(state);
    Bloomerang.Api.OnSubmit = Bloomerang.Widget.Donation.OnSubmit;
    Bloomerang.Widget.Donation.OnSuccess = () => onSuccess();
    Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess;
    Bloomerang.Widget.Donation.onInvalid = (error) => onFail(error);
    Bloomerang.Api.onInvalid = Bloomerang.Widget.Donation.onInvalid;

    SpreedlyExpress.setDisplayOptions({
      "amount":state.increaseImpact && state.type.toLowerCase() == "credit" ? accounting.formatMoney(parseInt(state.amount)+calcImpact(parseInt(state.amount))) : accounting.formatMoney(state.amount),
      "full_name":(state.fullName + " " + state.lastName),
      "submit_label":"Donate",
      "name_label":"Your Name",
      "sidebar_bottom_description":`Support ${(name==undefined || name==null || name=="") ? "the National School Project" : name}`
    })

    SpreedlyExpress.setPaymentMethodParams({
      "email":state.email,
      "phone_number":state.phone,
      "address1":state.address,
      "city":state.city,
      "state":state.state,
      "zip":state.zip
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

  let amount = parseInt(state.amount);
  if (state.increaseImpact && state.type.toLowerCase == "credit") {
    amount += calcImpact(amount);
  }

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
      .amount(amount + (state.increaseImpactBank ? .2 : 0))
      .frequency(state.frequency)
      .note(state.comments)
      .startDate(moment(state.date).format("YYYY-MM-DD"));
  } else {
    /* DONATION IS SINGLE TIME */
    console.log("Donation is non recurring");
    Bloomerang.Donation
      .amount(amount + (state.increaseImpactBank ? .2 : 0))
      .note(state.comments)
  }
}

function isValidDate(date) {
  if (date == undefined || date==null || date == "")
    return false;

  date = date.replace(/[^0-9]/g,'');

  if (date.length != 8)
    return false;

  if (Number.isNaN(parseInt(date)))
    return false;

  return true;
}

function validateResponses(state, onInvalid) {
  let amount = parseInt(state.amount);
  let errors = {};

  if (amount <= 0 || Number.isNaN(amount)) {
    errors.invalidAmount = true;
  }

  if (state.recurring && !isValidDate(state.startDate)) {
    errors.invalidDate = true;
  }

  if (state.firstName == "") {
    errors.invalidFirstName = true;
  }

  if (state.lastName == "") {
    errors.invalidLastName = true;
  }

  if (!/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}\b/g.test(state.email)) {
    errors.invalidEmail = true;
  }

  if (state.phone == "") {
    errors.invalidPhone = true;
  }

  if (state.address == "") {
    errors.invalidAddress = true;
  }

  if (!state.captcha) {
    errors.invalidCaptcha = true;
  }

  if (state.country == "US" || state.country == "CA") {
    if (state.zip == "") {
      errors.invalidZip = true;
    }
    if (state.city == "") {
      errors.invalidCity = true;
    }
  }

  if (Object.keys(errors).length > 0) {
    errors.page = 0;
    onInvalid(errors);
    return false;
  }
  return true;
}

function submit(state, onInvalid, onSuccess, onFail) {
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
    collectPayment(state, onInvalid, onSuccess, onFail);
  } else {
    console.log("Woah there cowboy, your form is being processed");
  }
}

export {
  submit
}
