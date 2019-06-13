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
    define(['ApiClient', 'model/QueueStatus', 'model/SuccessStatus200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QueueStatus'), require('./SuccessStatus200'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.QueueStatusResponse200 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.QueueStatus, root.CallbackAndRelatedApIs.SuccessStatus200);
  }
}(this, function(ApiClient, QueueStatus, SuccessStatus200) {
  'use strict';




  /**
   * The QueueStatusResponse200 model module.
   * @module model/QueueStatusResponse200
   * @version 3.0.000.19.007
   */

  /**
   * Constructs a new <code>QueueStatusResponse200</code>.
   * @alias module:model/QueueStatusResponse200
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>QueueStatusResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueueStatusResponse200} obj Optional instance to populate.
   * @return {module:model/QueueStatusResponse200} The populated <code>QueueStatusResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = SuccessStatus200.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = QueueStatus.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SuccessStatus200} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/QueueStatus} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


