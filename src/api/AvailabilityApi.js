/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.012
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
    define(['ApiClient', 'model/AvailabilitiesResponse200', 'model/AvailabilitiesResponse400', 'model/AvailabilitiesResponse500', 'model/OpenForResponse200', 'model/OpenForResponse400', 'model/OpenForResponse500'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvailabilitiesResponse200'), require('../model/AvailabilitiesResponse400'), require('../model/AvailabilitiesResponse500'), require('../model/OpenForResponse200'), require('../model/OpenForResponse400'), require('../model/OpenForResponse500'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.AvailabilityApi = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.AvailabilitiesResponse200, root.CallbackAndRelatedApIs.AvailabilitiesResponse400, root.CallbackAndRelatedApIs.AvailabilitiesResponse500, root.CallbackAndRelatedApIs.OpenForResponse200, root.CallbackAndRelatedApIs.OpenForResponse400, root.CallbackAndRelatedApIs.OpenForResponse500);
  }
}(this, function(ApiClient, AvailabilitiesResponse200, AvailabilitiesResponse400, AvailabilitiesResponse500, OpenForResponse200, OpenForResponse400, OpenForResponse500) {
  'use strict';

  /**
   * Availability service.
   * @module api/AvailabilityApi
   * @version 3.0.000.19.012
   */

  /**
   * Constructs a new AvailabilityApi. 
   * @alias module:api/AvailabilityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Gets Office Open Duration.
     * Retrieves how long the office will stay open in seconds.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {String} serviceName Name of the callback execution service provisioned in GES.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start Start date in ISO 8601 format. If no timezone is provided, UTC is assumed and this must be specified in yyyy-MM-ddTHH:mm:ss.SSSZ format. If a timezone is specified, then this must be specified in yyyy-MM-ddTHH:mm:ss.SSS format. If no start time is provided, the start time is assumed to be the current time.
     * @param {String} opts.timezone Timezone to use if start and/or end time are not specified in any specific timezone. For a list of possible values, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OpenForResponse200} and HTTP response
     */
    this.openForWithHttpInfo = function(xApiKey, serviceName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling openFor");
      }

      // verify the required parameter 'serviceName' is set
      if (serviceName === undefined || serviceName === null) {
        throw new Error("Missing the required parameter 'serviceName' when calling openFor");
      }


      var pathParams = {
        'service-name': serviceName
      };
      var queryParams = {
        'start': opts['start'],
        'timezone': opts['timezone'],
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
      var returnType = OpenForResponse200;

      return this.apiClient.callApi(
        '/callbacks/open-for/{service-name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets Office Open Duration.
     * Retrieves how long the office will stay open in seconds.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {String} serviceName Name of the callback execution service provisioned in GES.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start Start date in ISO 8601 format. If no timezone is provided, UTC is assumed and this must be specified in yyyy-MM-ddTHH:mm:ss.SSSZ format. If a timezone is specified, then this must be specified in yyyy-MM-ddTHH:mm:ss.SSS format. If no start time is provided, the start time is assumed to be the current time.
     * @param {String} opts.timezone Timezone to use if start and/or end time are not specified in any specific timezone. For a list of possible values, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OpenForResponse200}
     */
    this.openFor = function(xApiKey, serviceName, opts) {
      return this.openForWithHttpInfo(xApiKey, serviceName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets available time slots for a given queue.
     * Retrieves a map of slots in which the office capacity is not full.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {String} serviceName Name of the callback execution service provisioned in GES.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start Start date in ISO 8601 format. If no timezone is provided, UTC is assumed and this must be specified in yyyy-MM-ddTHH:mm:ss.SSSZ format. If a timezone is specified, then this must be specified in yyyy-MM-ddTHH:mm:ss.SSS format. If no start time is provided, the start time is assumed to be the current time.
     * @param {Number} opts.startMS Start date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). You must also set the endMS or numberOfDays parameter; otherwise, the end date is assumed to be the startMS date. If you set the startMS parameter, do not set the start or timestamp parameters.
     * @param {Number} opts.numberOfDays Used as an alternative to the end date. If neither end nor numberOfDays is specified, the end date is assumed to be the start date.
     * @param {Date} opts.end End date in ISO 8601 format. If no timezone is provided, UTC is assumed and this must be specified in yyyy-MM-ddTHH:mm:ss.SSSZ format. If a timezone is specified, then this must be specified in yyyy-MM-ddTHH:mm:ss.SSS format. If neither end nor numberOfDays is specified, the end time is assumed to be the start time. 
     * @param {Number} opts.endMS End date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). Set only one of the end, endMS, or numberOfDays parameters.
     * @param {String} opts.timezone Timezone for the start and end date parameters. If not specified, the default is UTC. Additionally, the response object will return the localTime fields formatted in this timezone. For a list of possible values, see the TZ column of the list in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     * @param {Number} opts.maxTimeSlots Maximum number of time slots to include in the response when the office is open and its capacity is above zero. Use this parameter to improve the performance of the query over a long period of time.
     * @param {Boolean} opts.reportBusy If true, the response includes the slots where the office is open and where callbacks are booked to full capacity. By default, reportBusy is false.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AvailabilitiesResponse200} and HTTP response
     */
    this.queryAvailabilityV2WithHttpInfo = function(xApiKey, serviceName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling queryAvailabilityV2");
      }

      // verify the required parameter 'serviceName' is set
      if (serviceName === undefined || serviceName === null) {
        throw new Error("Missing the required parameter 'serviceName' when calling queryAvailabilityV2");
      }


      var pathParams = {
        'service-name': serviceName
      };
      var queryParams = {
        'start': opts['start'],
        'startMS': opts['startMS'],
        'numberOfDays': opts['numberOfDays'],
        'end': opts['end'],
        'endMS': opts['endMS'],
        'timezone': opts['timezone'],
        'maxTimeSlots': opts['maxTimeSlots'],
        'reportBusy': opts['reportBusy'],
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
      var returnType = AvailabilitiesResponse200;

      return this.apiClient.callApi(
        '/callbacks/availability/{service-name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets available time slots for a given queue.
     * Retrieves a map of slots in which the office capacity is not full.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {String} serviceName Name of the callback execution service provisioned in GES.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start Start date in ISO 8601 format. If no timezone is provided, UTC is assumed and this must be specified in yyyy-MM-ddTHH:mm:ss.SSSZ format. If a timezone is specified, then this must be specified in yyyy-MM-ddTHH:mm:ss.SSS format. If no start time is provided, the start time is assumed to be the current time.
     * @param {Number} opts.startMS Start date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). You must also set the endMS or numberOfDays parameter; otherwise, the end date is assumed to be the startMS date. If you set the startMS parameter, do not set the start or timestamp parameters.
     * @param {Number} opts.numberOfDays Used as an alternative to the end date. If neither end nor numberOfDays is specified, the end date is assumed to be the start date.
     * @param {Date} opts.end End date in ISO 8601 format. If no timezone is provided, UTC is assumed and this must be specified in yyyy-MM-ddTHH:mm:ss.SSSZ format. If a timezone is specified, then this must be specified in yyyy-MM-ddTHH:mm:ss.SSS format. If neither end nor numberOfDays is specified, the end time is assumed to be the start time. 
     * @param {Number} opts.endMS End date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). Set only one of the end, endMS, or numberOfDays parameters.
     * @param {String} opts.timezone Timezone for the start and end date parameters. If not specified, the default is UTC. Additionally, the response object will return the localTime fields formatted in this timezone. For a list of possible values, see the TZ column of the list in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     * @param {Number} opts.maxTimeSlots Maximum number of time slots to include in the response when the office is open and its capacity is above zero. Use this parameter to improve the performance of the query over a long period of time.
     * @param {Boolean} opts.reportBusy If true, the response includes the slots where the office is open and where callbacks are booked to full capacity. By default, reportBusy is false.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AvailabilitiesResponse200}
     */
    this.queryAvailabilityV2 = function(xApiKey, serviceName, opts) {
      return this.queryAvailabilityV2WithHttpInfo(xApiKey, serviceName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
