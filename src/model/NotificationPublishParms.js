/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.007
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.NotificationPublishParms = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationPublishParms model module.
   * @module model/NotificationPublishParms
   * @version 3.0.000.19.007
   */

  /**
   * Constructs a new <code>NotificationPublishParms</code>.
   * @alias module:model/NotificationPublishParms
   * @class
   * @param channel {String} Channel name. The only accepted value is 'FCM' for now.
   * @param target {String} token identifying the recipient of the message.
   * @param event {String} notification object as documented by Firebase Messaging
   */
  var exports = function(channel, target, event) {
    var _this = this;

    _this['channel'] = channel;
    _this['target'] = target;
    _this['event'] = event;

  };

  /**
   * Constructs a <code>NotificationPublishParms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationPublishParms} obj Optional instance to populate.
   * @return {module:model/NotificationPublishParms} The populated <code>NotificationPublishParms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], 'String');
      }
      if (data.hasOwnProperty('event')) {
        obj['event'] = ApiClient.convertToType(data['event'], 'String');
      }
      if (data.hasOwnProperty('validate_only')) {
        obj['validate_only'] = ApiClient.convertToType(data['validate_only'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Channel name. The only accepted value is 'FCM' for now.
   * @member {String} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * token identifying the recipient of the message.
   * @member {String} target
   */
  exports.prototype['target'] = undefined;
  /**
   * notification object as documented by Firebase Messaging
   * @member {String} event
   */
  exports.prototype['event'] = undefined;
  /**
   * Enables a dry-run option provided by Firebase. When enabled Firebase validates credentials, recipient, and message structure, but doesn't actually deliver the message.
   * @member {Boolean} validate_only
   */
  exports.prototype['validate_only'] = undefined;



  return exports;
}));


