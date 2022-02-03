/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.016
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
    define(['ApiClient', 'model/EstimatedWaitTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EstimatedWaitTime'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.EstimatedWaitTimes = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.EstimatedWaitTime);
  }
}(this, function(ApiClient, EstimatedWaitTime) {
  'use strict';




  /**
   * The EstimatedWaitTimes model module.
   * @module model/EstimatedWaitTimes
   * @version 3.0.000.19.016
   */

  /**
   * Constructs a new <code>EstimatedWaitTimes</code>.
   * @alias module:model/EstimatedWaitTimes
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>EstimatedWaitTimes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstimatedWaitTimes} obj Optional instance to populate.
   * @return {module:model/EstimatedWaitTimes} The populated <code>EstimatedWaitTimes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'EstimatedWaitTime');

    }
    return obj;
  }




  return exports;
}));


