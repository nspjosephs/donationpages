var run = () => {

  if (window.ActiveXObject) {
    Bloomerang.BROWSER_UNSUPPORTED = true;
  } else {
    Bloomerang.BROWSER_UNSUPPORTED = false;
  }

  if (!Bloomerang.SpreedlyScriptLoaded) {
    Bloomerang.Util.load('https://core.spreedly.com/iframe/express-2.min.js',
    () => (SpreedlyExpress != undefined),
    () => {
      SpreedlyExpress.onInit(() => {
        console.log("Spreedly Initilized...");
      });
      Bloomerang.initSpreedly = () => {
        SpreedlyExpress.init('OqOMv1ksjPtXEYHtCYsVXzEpCbR', { 'company_name':'National School Project' });
      }
      Bloomerang.initSpreedly();
    });
    Bloomerang.SpreedlyScriptLoaded = true;
  }

  Bloomerang.useKey('pub_eaf5f8aa-fc8f-11e3-a756-02a718d18e56');

}

export {
  run,
  SpreedlyExpress
}
