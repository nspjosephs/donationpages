//This script sets up Bloomerang
var run = () => {

  if (Bloomerang == null || Bloomerang == undefined || Bloomerang == {}) {
    console.log("Bloomerang is NULL, setting timeout then trying again...")
    setTimeout(run,1000);
    return false;
  }

  if (Bloomerang.isDebugging) {
    console.log("Bloomerang is debugging, returning true");
    var SpreedlyExpress = {
      DEBUGGING:true
    }
    return true;
  }

  Bloomerang.useKey('pub_eaf5f8aa-fc8f-11e3-a756-02a718d18e56');

  let donationId = getParameterByName("dID");

  if (donationId == undefined || donationId == null || donationId == "") {
    console.log("Donation ID is null, returning false");
    return false;
  }

  if (Bloomerang.useDonationId(donationId)) {
    console.log(getParameterByName("name") + "'s form being used...");

    /* === SETTING PAYMENT PROCESSOR === */
    Bloomerang.useProcessor('116736', 'BluePay', '100183179437', false, '46CED60BAB24A54120C67A1BB10C95D3', true);
    console.log("Processor loaded...");

    /* === CHECKING IF BROWSER IS SUPPORTED === */
    if (window.ActiveXObject) {
      Bloomerang.BROWSER_UNSUPPORTED = true;
      console.log("Browser is unsupported, returning false...");
      return false;
    } else {
      Bloomerang.BROWSER_UNSUPPORTED = false;
      console.log("Browser is supported...");
    }

    /* === LOADING AND INITIALIZING SPREEDLY === */
    if (!Bloomerang.SpreedlyScriptLoaded) {
      console.log("Spreedly Script is not loaded, loading now...");
      window.Bloomerang.Util.load('https://core.spreedly.com/iframe/express-2.min.js',
      () => {return SpreedlyExpress != null && SpreedlyExpress != undefined},
      () => {
        console.log("SpreedlyExpress is loaded, initializing now...");
        SpreedlyExpress.onInit(() => {
          console.log("Spreedly Initilized...");
        });
        SpreedlyExpress.init('OqOMv1ksjPtXEYHtCYsVXzEpCbR', { 'company_name':'National School Project' });
        Bloomerang.SpreedlyScriptInitialized = true;
      });
      Bloomerang.SpreedlyScriptLoaded = true;
      console.log("SpreedlyExpress is loaded and initialized...");
    }

    /* === SETTING TRANSACTION FEE CONSTANTS === */
    window.Bloomerang.transactionFee = 0.2;
    window.Bloomerang.transactionFeeRate = 0.025;
    console.log("Bloomerang transaction fee constants set");

    /* === SETTING FORM CONTROL VARIABLE TO PREVENT ACCIDENTAL MULTIPLE SUBMISSIONS === */
    window.Bloomerang.formSubmitted = false;
    console.log("Bloomerang form submitted set");

    /* === TELL BLOOMERANG WE'RE USING RECAPTCHA === */
    Bloomerang.gRecaptchaLoaded = true;

    return true;
  } else {
    return false;
  }

}

function calcImpact(amount) {
  if (Bloomerang.transactionFee == undefined) {
    console.log("Transaction cost constants are not set, setting them now...");
    Bloomerang.transactionFee = .2;
    Bloomerang.transactionFeeRate = .025;
  }
  console.log("---- Calculating True Impact ----");
  console.log("- Amount: " + amount);
  let feeRate = Bloomerang.transactionFeeRate;
  console.log("- Fee rate: " + feeRate);
  let newTotal = (amount + Bloomerang.transactionFee) / (1 - feeRate);
  console.log("- New total: " + newTotal)
  let impactAmount = Number((newTotal - amount).toFixed(2));
  console.log("- Impact amount: " + impactAmount);
  console.log("---------------------------------");
  return impactAmount;
}

var getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export {
  run,
  getParameterByName,
  calcImpact
}
