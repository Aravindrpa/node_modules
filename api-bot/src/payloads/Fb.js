/**
 * Classes to handle different type of payloads from the various chatbots.
 * @module root.payloads.Fb
 * @alias FbPayload
 */

/**
  * `attachment` object for response message to Facebook messenger.
  * [details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#attachment)
  * @typedef {Object} Attachment
  * @property {String} type - Type of attachment, may be `image`, `audio`, `video`, `file` or `template`.
  * @property {Any} payload - Payload of attachment.
  */

/**
  * `quick_reply` object for response message to Facebook messenger.
  * [details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#quick_reply)
  * @typedef {Object} QuickReply
  * @property {String} content_type - `text` or `location`.
  * @property {String} title - Caption of button.
  * @property {String|Number} payload - Custom data that will be sent back to you via webhook.
  * @property {String=} image_url - URL of image for text quick replies.
  */

/**
  * `message` object for response message to Facebook messenger.
  * [details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#message)
  * @typedef {Object} Message
  * @property {String} text - Message text. Previews will not be shown for the URLs in this field. Use attachment instead. Must be UTF-8 and has a 640 character limit.
  * @property {module:FbPayload~Attachment} attachment -attachment object. Previews the URL. Used to send messages with media or Structured Messages.
  * @property {module:FbPayload~QuickReply[]} quick_replies - Array of quick_reply to be sent with messages.
  * @property {String=} metadata - Custom string that is delivered as a message echo. 1000 character limit.
  */

/**
    * `payload` object for response message to Facebook messenger.
    * @typedef {Object} Recipient
    * @property {String|Number} id id of the Facebook messenger recipient.
    */

/**
   * `payload` object for response message to Facebook messenger.
   * [details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#payload)
   * @typedef {Object} Payload
   * @property {module:FbPayload~Recipient} recipient Recipient object.
   * @property {module:FbPayload~Message} message Message object.
   * @property {String} sender_action `typing_on`, `typing_off` or `mark_seen`.
   * @property {String=} notification_type `REGULAR`, `SILENT_PUSH`, `NO_PUSH`. Defaults to `REGULAR`.
   * @property {String=} tag The message tag string. See [Message Tags](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags).
   */

/**
 * Facebook messenger response payload.
 */
class FbResponse {
  /**
   * Create a new Facebook Payload.
   * @param {BotRequest} botrequest
   * @param {Rendered} rendered
   */
  constructor(botrequest, rendered) {
    this._state = {
      recipient: {id: botrequest.uid},
      message: {
        text: rendered.textRE$
      }
    };
  }

  /** @return {module:FbPayload~Payload} response payload. */
  get payload() {
    return this._state;
  }
}

/**
 * Facebook messenger payload for each entry.
 */
class FbRequest {
  /**
   * Create a new Facebook Payload.
   * @param {Object} payload A single `entry` in the raw Facebook messager payload.
   */
  constructor(payload) {
    this._state = {payload};
  }

  /** @return {Object} payload. */
  get payload() {
    return this._state.payload;
  }

  /** @return {String|Number} sender/user id. */
  get uid() {
    return this.payload.sender.id;
  }

  /** @return {String} text message. */
  get text() {
    return this.payload.message.text;
  }
  /**
   * Static function to process the raw Facebook payload into an Array of
   * `FbPayloads`. Handles `page` type of payload only.
   * @static
   * @param {Object} raw The raw Facebook payload.
   * @return {FbPayload[]} An array of `FbPayloads`.
   */
  static process(raw) {
    // Make sure this is a page subscription
    if (raw.object === 'page') {
      return raw.map(o => new FbRequest(o));
    }
    return [];
  }
}

module.exports = {Request: FbRequest, Response: FbResponse};
