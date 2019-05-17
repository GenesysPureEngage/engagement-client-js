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
    define(['ApiClient', 'model/VerifyCaptchaRequestsStatus400'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VerifyCaptchaRequestsStatus400'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.VerifyCaptchaResponse400 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.VerifyCaptchaRequestsStatus400);
  }
}(this, function(ApiClient, VerifyCaptchaRequestsStatus400) {
  'use strict';




  /**
   * The VerifyCaptchaResponse400 model module.
   * @module model/VerifyCaptchaResponse400
   * @version 3.0.000.19.004
   */

  /**
   * Constructs a new <code>VerifyCaptchaResponse400</code>.
   * @alias module:model/VerifyCaptchaResponse400
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>VerifyCaptchaResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerifyCaptchaResponse400} obj Optional instance to populate.
   * @return {module:model/VerifyCaptchaResponse400} The populated <code>VerifyCaptchaResponse400</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = VerifyCaptchaRequestsStatus400.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VerifyCaptchaRequestsStatus400} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


