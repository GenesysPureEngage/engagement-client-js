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
    define(['ApiClient', 'model/CancelCallbackStatus404'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CancelCallbackStatus404'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CancelCallbackResponse404 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.CancelCallbackStatus404);
  }
}(this, function(ApiClient, CancelCallbackStatus404) {
  'use strict';




  /**
   * The CancelCallbackResponse404 model module.
   * @module model/CancelCallbackResponse404
   * @version 3.0.000.19.004
   */

  /**
   * Constructs a new <code>CancelCallbackResponse404</code>.
   * @alias module:model/CancelCallbackResponse404
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CancelCallbackResponse404</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelCallbackResponse404} obj Optional instance to populate.
   * @return {module:model/CancelCallbackResponse404} The populated <code>CancelCallbackResponse404</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CancelCallbackStatus404.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CancelCallbackStatus404} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


