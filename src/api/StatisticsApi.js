/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.011
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
    define(['ApiClient', 'model/StatisticsResponse200', 'model/StatisticsResponse401', 'model/StatisticsResponse500'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatisticsResponse200'), require('../model/StatisticsResponse401'), require('../model/StatisticsResponse500'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.StatisticsApi = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.StatisticsResponse200, root.CallbackAndRelatedApIs.StatisticsResponse401, root.CallbackAndRelatedApIs.StatisticsResponse500);
  }
}(this, function(ApiClient, StatisticsResponse200, StatisticsResponse401, StatisticsResponse500) {
  'use strict';

  /**
   * Statistics service.
   * @module api/StatisticsApi
   * @version 3.0.000.19.011
   */

  /**
   * Constructs a new StatisticsApi. 
   * @alias module:api/StatisticsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get the values of a set of statistics.
     * Provides a proxy to the GWS statistics API. GWS credentials must be entered in the credentials UI.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StatisticsResponse200} and HTTP response
     */
    this.statisticsWithHttpInfo = function(xApiKey) {
      var postBody = null;

      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling statistics");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StatisticsResponse200;

      return this.apiClient.callApi(
        '/statistics/operations/get-statistic-ex', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the values of a set of statistics.
     * Provides a proxy to the GWS statistics API. GWS credentials must be entered in the credentials UI.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatisticsResponse200}
     */
    this.statistics = function(xApiKey) {
      return this.statisticsWithHttpInfo(xApiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));