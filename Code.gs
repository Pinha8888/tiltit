function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('TILTIT · Today I Learn, Tomorrow I Teach')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // permite incrustarlo en Google Sites
}
