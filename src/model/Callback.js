/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.012
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
    root.CallbackAndRelatedApIs.Callback = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Callback model module.
   * @module model/Callback
   * @version 3.0.000.19.012
   */

  /**
   * Constructs a new <code>Callback</code>.
   * @alias module:model/Callback
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Callback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Callback} obj Optional instance to populate.
   * @return {module:model/Callback} The populated <code>Callback</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('desiredTime')) {
        obj['desiredTime'] = ApiClient.convertToType(data['desiredTime'], 'Date');
      }
      if (data.hasOwnProperty('callbackState')) {
        obj['callbackState'] = ApiClient.convertToType(data['callbackState'], 'String');
      }
      if (data.hasOwnProperty('callbackReason')) {
        obj['callbackReason'] = ApiClient.convertToType(data['callbackReason'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('positionInQueue')) {
        obj['positionInQueue'] = ApiClient.convertToType(data['positionInQueue'], 'Number');
      }
      if (data.hasOwnProperty('estimatedWaitTime')) {
        obj['estimatedWaitTime'] = ApiClient.convertToType(data['estimatedWaitTime'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The callback ID.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Desired time of the callback in UTC.
   * @member {Date} desiredTime
   */
  exports.prototype['desiredTime'] = undefined;
  /**
   * Current state of the callback. Possible values are - SCHEDULED, QUEUED, ROUTING, PROCESSING, COMPLETED.
   * @member {String} callbackState
   */
  exports.prototype['callbackState'] = undefined;
  /**
   * Provides a reason for completion. This is only provided if the callback is in a COMPLETED state.
   * @member {String} callbackReason
   */
  exports.prototype['callbackReason'] = undefined;
  /**
   * Number to call back.
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Position in queue. This property is only provided if the callback is in one of the following state - QUEUED, ROUTING, or PROCESSING.
   * @member {Number} positionInQueue
   */
  exports.prototype['positionInQueue'] = undefined;
  /**
   * Expected waiting time (in seconds). This property is only provided if the callback is in one of the following state - QUEUED, ROUTING, or PROCESSING.
   * @member {Number} estimatedWaitTime
   */
  exports.prototype['estimatedWaitTime'] = undefined;



  return exports;
}));


