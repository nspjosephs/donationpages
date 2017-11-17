var run = () => {

  if (Bloomerang == null) {
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

  if (Bloomerang.useDonationId("12827659")) {
    console.log("Hannah's Donation being used...");

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
      Bloomerang.Util.load('https://core.spreedly.com/iframe/express-2.min.js',
      () => {console.log(SpreedlyExpress); return true;},
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
    Bloomerang.transactionFee = 0.2;
    Bloomerang.transactionFeeRate = 0.025;

    /* === SETTING FORM CONTROL VARIABLE TO PREVENT ACCIDENTAL MULTIPLE SUBMISSIONS === */
    Bloomerang.formSubmitted = false;


    return true;
  }

}

export {
  run
}
