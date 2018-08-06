const request = require('request');
const {Request, Response} = require('../payloads/Fb.js');

/**
 * Module for handling Facebook messenger hooks.
 * @module root.bots.Fbot
 * @alias Fbot
 */

/**
 * Utility class to handle Facebook messenger APIs.
 */
class Fbot {
  /**
   * Utility class to handle Facebook messenger APIs.
   * @param {Job} job `Job` object after rendering.
   * @return {Promise}
   */
  static response(job) {
    var response = new Response(job);
    return new Promise((resolve, reject) => {
      request(
        {
          uri: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {access_token: process.env.FB_TOKEN},
          method: 'POST',
          json: response.payload
        },
        function(error, response, body) {
          if (!error && response.statusCode == 200) {
            resolve(job);
          } else {
            console.error('Unable to send message.');
            console.error(body);
            console.error(error);
            reject(error);
          }
        }
      );
    });
  }

  /**
   * Utility class to handle Facebook messenger raw request body.
   * @param {Object} raw raw request body
   * @return {RequestPayload} An array of RequestPayload.
   */
  static handle(raw) {
    try {
      var json = typeof raw === 'string' ? JSON.parse(raw) : raw;
      return Request.process(json);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Fbot;
