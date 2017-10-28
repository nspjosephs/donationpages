var run = () => {

  if (Bloomerang == null) {
    console.log("Bloomerang is NULL, setting timeout then trying again...")
    setTimeout(run,1000);
    return false;
  }

  Bloomerang.useKey('pub_eaf5f8aa-fc8f-11e3-a756-02a718d18e56');

  if (Bloomerang.useDonationId("12827659")) {
    console.log("Hannah's Donation being used...");

    if (window.ActiveXObject) {
      Bloomerang.BROWSER_UNSUPPORTED = true;
      console.log("Browser is unsupported, returning false...");
      return false;
    } else {
      Bloomerang.BROWSER_UNSUPPORTED = false;
      console.log("Browser is supported...");
    }

    if (!Bloomerang.SpreedlyScriptLoaded) {
      console.log("Spreedly Script is not loaded, loading now...");
      Bloomerang.Util.load('https://core.spreedly.com/iframe/express-2.min.js',
      () => (SpreedlyExpress != undefined),
      () => {
        console.log("SpreedlyExpress is loaded, initializing now...");
        SpreedlyExpress.onInit(() => {
          console.log("Spreedly Initilized...");
        });
        Bloomerang.initSpreedly = () => {
          SpreedlyExpress.init('OqOMv1ksjPtXEYHtCYsVXzEpCbR', { 'company_name':'National School Project' });
        }
        Bloomerang.initSpreedly();
      });
      Bloomerang.SpreedlyScriptLoaded = true;
      console.log("SpreedlyExpress is loaded and initialized...");
    }
  }

}

export {
  run,
  SpreedlyExpress
}