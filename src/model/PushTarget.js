/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.013
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
    root.CallbackAndRelatedApIs.PushTarget = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushTarget model module.
   * @module model/PushTarget
   * @version 3.0.000.19.013
   */

  /**
   * Constructs a new <code>PushTarget</code>.
   * @alias module:model/PushTarget
   * @class
   * @param channel {String} Channel name. The only accepted value is 'FCM' for now.
   * @param target {String} Token identifying the recipient of the message.
   */
  var exports = function(channel, target) {
    var _this = this;

    _this['channel'] = channel;
    _this['target'] = target;
  };

  /**
   * Constructs a <code>PushTarget</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushTarget} obj Optional instance to populate.
   * @return {module:model/PushTarget} The populated <code>PushTarget</code> instance.
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
    }
    return obj;
  }

  /**
   * Channel name. The only accepted value is 'FCM' for now.
   * @member {String} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * Token identifying the recipient of the message.
   * @member {String} target
   */
  exports.prototype['target'] = undefined;



  return exports;
}));


