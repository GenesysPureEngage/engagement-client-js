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
    define(['ApiClient', 'model/CreateCallbackStatus429', 'model/ProposedSlots'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateCallbackStatus429'), require('./ProposedSlots'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CreateCallbackResponse429 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.CreateCallbackStatus429, root.CallbackAndRelatedApIs.ProposedSlots);
  }
}(this, function(ApiClient, CreateCallbackStatus429, ProposedSlots) {
  'use strict';




  /**
   * The CreateCallbackResponse429 model module.
   * @module model/CreateCallbackResponse429
   * @version 3.0.000.19.007
   */

  /**
   * Constructs a new <code>CreateCallbackResponse429</code>.
   * @alias module:model/CreateCallbackResponse429
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreateCallbackResponse429</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCallbackResponse429} obj Optional instance to populate.
   * @return {module:model/CreateCallbackResponse429} The populated <code>CreateCallbackResponse429</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CreateCallbackStatus429.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ProposedSlots.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CreateCallbackStatus429} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/ProposedSlots} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


