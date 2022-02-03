const functions = require('firebase-functions');
// Increase readability in Cloud Logging
require('firebase-functions/lib/logger/compat');

exports.ssr_obumnwabude = functions.https.onRequest(
  require('./dist/obumnwabude/server/main').app()
);
