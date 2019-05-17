/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.004
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
    define(['ApiClient', 'model/SuccessStatus200', 'model/VerifyCaptchaRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SuccessStatus200'), require('./VerifyCaptchaRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.VerifyCaptchaResponse200 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.SuccessStatus200, root.CallbackAndRelatedApIs.VerifyCaptchaRequest);
  }
}(this, function(ApiClient, SuccessStatus200, VerifyCaptchaRequest) {
  'use strict';




  /**
   * The VerifyCaptchaResponse200 model module.
   * @module model/VerifyCaptchaResponse200
   * @version 3.0.000.19.004
   */

  /**
   * Constructs a new <code>VerifyCaptchaResponse200</code>.
   * @alias module:model/VerifyCaptchaResponse200
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VerifyCaptchaResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerifyCaptchaResponse200} obj Optional instance to populate.
   * @return {module:model/VerifyCaptchaResponse200} The populated <code>VerifyCaptchaResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = SuccessStatus200.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = VerifyCaptchaRequest.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SuccessStatus200} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/VerifyCaptchaRequest} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


