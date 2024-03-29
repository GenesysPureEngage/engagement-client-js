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
    define(['ApiClient', 'model/HashData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HashData'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.ProposedSlots = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.HashData);
  }
}(this, function(ApiClient, HashData) {
  'use strict';




  /**
   * The ProposedSlots model module.
   * @module model/ProposedSlots
   * @version 3.0.000.19.016
   */

  /**
   * Constructs a new <code>ProposedSlots</code>.
   * List of proposed slots and capacities.
   * @alias module:model/ProposedSlots
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProposedSlots</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProposedSlots} obj Optional instance to populate.
   * @return {module:model/ProposedSlots} The populated <code>ProposedSlots</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('slots')) {
        obj['slots'] = HashData.constructFromObject(data['slots']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/HashData} slots
   */
  exports.prototype['slots'] = undefined;



  return exports;
}));


