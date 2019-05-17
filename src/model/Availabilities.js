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
    define(['ApiClient', 'model/Slot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Slot'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.Availabilities = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.Slot);
  }
}(this, function(ApiClient, Slot) {
  'use strict';




  /**
   * The Availabilities model module.
   * @module model/Availabilities
   * @version 3.0.000.19.004
   */

  /**
   * Constructs a new <code>Availabilities</code>.
   * @alias module:model/Availabilities
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Availabilities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Availabilities} obj Optional instance to populate.
   * @return {module:model/Availabilities} The populated <code>Availabilities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('slots')) {
        obj['slots'] = ApiClient.convertToType(data['slots'], [Slot]);
      }
      if (data.hasOwnProperty('durationMin')) {
        obj['durationMin'] = ApiClient.convertToType(data['durationMin'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Slot>} slots
   */
  exports.prototype['slots'] = undefined;
  /**
   * @member {Number} durationMin
   */
  exports.prototype['durationMin'] = undefined;
  /**
   * For a list of possible values, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));


