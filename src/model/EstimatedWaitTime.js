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
    root.CallbackAndRelatedApIs.EstimatedWaitTime = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EstimatedWaitTime model module.
   * @module model/EstimatedWaitTime
   * @version 3.0.000.19.007
   */

  /**
   * Constructs a new <code>EstimatedWaitTime</code>.
   * @alias module:model/EstimatedWaitTime
   * @class
   * @param virtualQueue {String} Name of the virtual queue
   * @param estimatedWaitTime {Number} Estimated wait time (in seconds) for the call. If unknown, this value is set to -1.
   * @param message {String} Contains the reason why the Estimated wait time can not be obtained.
   */
  var exports = function(virtualQueue, estimatedWaitTime, message) {
    var _this = this;

    _this['virtualQueue'] = virtualQueue;
    _this['estimatedWaitTime'] = estimatedWaitTime;
    _this['message'] = message;
  };

  /**
   * Constructs a <code>EstimatedWaitTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimatedWaitTime} obj Optional instance to populate.
   * @return {module:model/EstimatedWaitTime} The populated <code>EstimatedWaitTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('virtualQueue')) {
        obj['virtualQueue'] = ApiClient.convertToType(data['virtualQueue'], 'String');
      }
      if (data.hasOwnProperty('estimatedWaitTime')) {
        obj['estimatedWaitTime'] = ApiClient.convertToType(data['estimatedWaitTime'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the virtual queue
   * @member {String} virtualQueue
   */
  exports.prototype['virtualQueue'] = undefined;
  /**
   * Estimated wait time (in seconds) for the call. If unknown, this value is set to -1.
   * @member {Number} estimatedWaitTime
   */
  exports.prototype['estimatedWaitTime'] = undefined;
  /**
   * Contains the reason why the Estimated wait time can not be obtained.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


