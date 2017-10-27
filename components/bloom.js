var run = () => {

  if (window.ActiveXObject) {
    Bloomerang.BROWSER_UNSUPPORTED = true;
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

}

export {
  run,
  SpreedlyExpress
}
