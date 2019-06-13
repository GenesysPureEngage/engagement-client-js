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
    root.CallbackAndRelatedApIs.CallInRequest = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CallInRequest model module.
   * @module model/CallInRequest
   * @version 3.0.000.19.007
   */

  /**
   * Constructs a new <code>CallInRequest</code>.
   * @alias module:model/CallInRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CallInRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallInRequest} obj Optional instance to populate.
   * @return {module:model/CallInRequest} The populated <code>CallInRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('toPhoneNumber')) {
        obj['toPhoneNumber'] = ApiClient.convertToType(data['toPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('expirationTime')) {
        obj['expirationTime'] = ApiClient.convertToType(data['expirationTime'], 'Number');
      }
      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'Number');
      }
      if (data.hasOwnProperty('fromPhoneNumber')) {
        obj['fromPhoneNumber'] = ApiClient.convertToType(data['fromPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('callbackServiceId')) {
        obj['callbackServiceId'] = ApiClient.convertToType(data['callbackServiceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Click-To-Call-In request ID.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Phone number to call.
   * @member {String} toPhoneNumber
   */
  exports.prototype['toPhoneNumber'] = undefined;
  /**
   * Name of the Click-To-Call-In resource group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * Expiration time of the request in epoch time format.
   * @member {Number} expirationTime
   */
  exports.prototype['expirationTime'] = undefined;
  /**
   * Access code to use.
   * @member {Number} accessCode
   */
  exports.prototype['accessCode'] = undefined;
  /**
   * Phone number associated with the request.
   * @member {String} fromPhoneNumber
   */
  exports.prototype['fromPhoneNumber'] = undefined;
  /**
   * Callback ID associated with the request.
   * @member {String} callbackServiceId
   */
  exports.prototype['callbackServiceId'] = undefined;



  return exports;
}));


