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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CallbackIdParms = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CallbackIdParms model module.
   * @module model/CallbackIdParms
   * @version 3.0.000.19.016
   */

  /**
   * Constructs a new <code>CallbackIdParms</code>.
   * @alias module:model/CallbackIdParms
   * @class
   * @param id {String} Callback ID returned in the response of the Create Callback request.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>CallbackIdParms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallbackIdParms} obj Optional instance to populate.
   * @return {module:model/CallbackIdParms} The populated <code>CallbackIdParms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Callback ID returned in the response of the Create Callback request.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


