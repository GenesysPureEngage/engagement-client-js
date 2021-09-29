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
    define(['ApiClient', 'model/CallbackStatus500'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CallbackStatus500'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CallbackResponse500 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.CallbackStatus500);
  }
}(this, function(ApiClient, CallbackStatus500) {
  'use strict';




  /**
   * The CallbackResponse500 model module.
   * @module model/CallbackResponse500
   * @version 3.0.000.19.013
   */

  /**
   * Constructs a new <code>CallbackResponse500</code>.
   * @alias module:model/CallbackResponse500
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CallbackResponse500</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallbackResponse500} obj Optional instance to populate.
   * @return {module:model/CallbackResponse500} The populated <code>CallbackResponse500</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CallbackStatus500.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CallbackStatus500} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


