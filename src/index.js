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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Availabilities', 'model/AvailabilitiesResponse200', 'model/AvailabilitiesResponse400', 'model/AvailabilitiesResponse500', 'model/AvailabilitiesStatus400', 'model/AvailabilitiesStatus500', 'model/CallInRequest', 'model/CallInRequestsParms', 'model/CallInRequestsResponse200', 'model/CallInRequestsResponse400', 'model/CallInRequestsResponse500', 'model/CallInRequestsStatus400', 'model/CallInRequestsStatus500', 'model/Callback', 'model/CallbackIdParms', 'model/CallbackResponse500', 'model/CallbackStatus500', 'model/CancelCallbackData', 'model/CancelCallbackResponse200', 'model/CancelCallbackResponse400', 'model/CancelCallbackResponse404', 'model/CancelCallbackStatus400', 'model/CancelCallbackStatus404', 'model/CreateCallbackData', 'model/CreateCallbackParms', 'model/CreateCallbackResponse200', 'model/CreateCallbackResponse400', 'model/CreateCallbackResponse429', 'model/CreateCallbackStatus400', 'model/CreateCallbackStatus429', 'model/EstimatedWaitTime', 'model/EstimatedWaitTimeResponse200', 'model/EstimatedWaitTimeResponse400', 'model/EstimatedWaitTimeResponse500', 'model/EstimatedWaitTimeStatus400', 'model/EstimatedWaitTimeStatus500', 'model/EstimatedWaitTimes', 'model/GetCallbackResponse200', 'model/GetCallbackResponse400', 'model/GetCallbackResponse404', 'model/GetCallbackStatus400', 'model/GetCallbackStatus404', 'model/HashData', 'model/NotificationPublish', 'model/NotificationPublishParms', 'model/NotificationPublishResponse200', 'model/NotificationPublishResponse400', 'model/NotificationPublishResponse500', 'model/NotificationPublishStatus400', 'model/NotificationPublishStatus500', 'model/OpenForData', 'model/OpenForResponse200', 'model/OpenForResponse400', 'model/OpenForResponse500', 'model/OpenForStatus400', 'model/OpenForStatus500', 'model/ProposedSlots', 'model/PushTarget', 'model/QueueStatus', 'model/QueueStatus400', 'model/QueueStatus500', 'model/QueueStatusResponse200', 'model/QueueStatusResponse400', 'model/QueueStatusResponse500', 'model/Slot', 'model/Statistics', 'model/StatisticsResponse200', 'model/StatisticsResponse401', 'model/StatisticsResponse500', 'model/StatisticsStatus401', 'model/StatisticsStatus500', 'model/SuccessStatus200', 'model/VerifyCaptchaParms', 'model/VerifyCaptchaRequest', 'model/VerifyCaptchaRequestsStatus400', 'model/VerifyCaptchaRequestsStatus500', 'model/VerifyCaptchaResponse200', 'model/VerifyCaptchaResponse400', 'model/VerifyCaptchaResponse500', 'api/AvailabilityApi', 'api/CallInApi', 'api/CallbacksApi', 'api/EstimatedWaitTimeApi', 'api/QueueStatusApi', 'api/StatisticsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Availabilities'), require('./model/AvailabilitiesResponse200'), require('./model/AvailabilitiesResponse400'), require('./model/AvailabilitiesResponse500'), require('./model/AvailabilitiesStatus400'), require('./model/AvailabilitiesStatus500'), require('./model/CallInRequest'), require('./model/CallInRequestsParms'), require('./model/CallInRequestsResponse200'), require('./model/CallInRequestsResponse400'), require('./model/CallInRequestsResponse500'), require('./model/CallInRequestsStatus400'), require('./model/CallInRequestsStatus500'), require('./model/Callback'), require('./model/CallbackIdParms'), require('./model/CallbackResponse500'), require('./model/CallbackStatus500'), require('./model/CancelCallbackData'), require('./model/CancelCallbackResponse200'), require('./model/CancelCallbackResponse400'), require('./model/CancelCallbackResponse404'), require('./model/CancelCallbackStatus400'), require('./model/CancelCallbackStatus404'), require('./model/CreateCallbackData'), require('./model/CreateCallbackParms'), require('./model/CreateCallbackResponse200'), require('./model/CreateCallbackResponse400'), require('./model/CreateCallbackResponse429'), require('./model/CreateCallbackStatus400'), require('./model/CreateCallbackStatus429'), require('./model/EstimatedWaitTime'), require('./model/EstimatedWaitTimeResponse200'), require('./model/EstimatedWaitTimeResponse400'), require('./model/EstimatedWaitTimeResponse500'), require('./model/EstimatedWaitTimeStatus400'), require('./model/EstimatedWaitTimeStatus500'), require('./model/EstimatedWaitTimes'), require('./model/GetCallbackResponse200'), require('./model/GetCallbackResponse400'), require('./model/GetCallbackResponse404'), require('./model/GetCallbackStatus400'), require('./model/GetCallbackStatus404'), require('./model/HashData'), require('./model/NotificationPublish'), require('./model/NotificationPublishParms'), require('./model/NotificationPublishResponse200'), require('./model/NotificationPublishResponse400'), require('./model/NotificationPublishResponse500'), require('./model/NotificationPublishStatus400'), require('./model/NotificationPublishStatus500'), require('./model/OpenForData'), require('./model/OpenForResponse200'), require('./model/OpenForResponse400'), require('./model/OpenForResponse500'), require('./model/OpenForStatus400'), require('./model/OpenForStatus500'), require('./model/ProposedSlots'), require('./model/PushTarget'), require('./model/QueueStatus'), require('./model/QueueStatus400'), require('./model/QueueStatus500'), require('./model/QueueStatusResponse200'), require('./model/QueueStatusResponse400'), require('./model/QueueStatusResponse500'), require('./model/Slot'), require('./model/Statistics'), require('./model/StatisticsResponse200'), require('./model/StatisticsResponse401'), require('./model/StatisticsResponse500'), require('./model/StatisticsStatus401'), require('./model/StatisticsStatus500'), require('./model/SuccessStatus200'), require('./model/VerifyCaptchaParms'), require('./model/VerifyCaptchaRequest'), require('./model/VerifyCaptchaRequestsStatus400'), require('./model/VerifyCaptchaRequestsStatus500'), require('./model/VerifyCaptchaResponse200'), require('./model/VerifyCaptchaResponse400'), require('./model/VerifyCaptchaResponse500'), require('./api/AvailabilityApi'), require('./api/CallInApi'), require('./api/CallbacksApi'), require('./api/EstimatedWaitTimeApi'), require('./api/QueueStatusApi'), require('./api/StatisticsApi'));
  }
}(function(ApiClient, Availabilities, AvailabilitiesResponse200, AvailabilitiesResponse400, AvailabilitiesResponse500, AvailabilitiesStatus400, AvailabilitiesStatus500, CallInRequest, CallInRequestsParms, CallInRequestsResponse200, CallInRequestsResponse400, CallInRequestsResponse500, CallInRequestsStatus400, CallInRequestsStatus500, Callback, CallbackIdParms, CallbackResponse500, CallbackStatus500, CancelCallbackData, CancelCallbackResponse200, CancelCallbackResponse400, CancelCallbackResponse404, CancelCallbackStatus400, CancelCallbackStatus404, CreateCallbackData, CreateCallbackParms, CreateCallbackResponse200, CreateCallbackResponse400, CreateCallbackResponse429, CreateCallbackStatus400, CreateCallbackStatus429, EstimatedWaitTime, EstimatedWaitTimeResponse200, EstimatedWaitTimeResponse400, EstimatedWaitTimeResponse500, EstimatedWaitTimeStatus400, EstimatedWaitTimeStatus500, EstimatedWaitTimes, GetCallbackResponse200, GetCallbackResponse400, GetCallbackResponse404, GetCallbackStatus400, GetCallbackStatus404, HashData, NotificationPublish, NotificationPublishParms, NotificationPublishResponse200, NotificationPublishResponse400, NotificationPublishResponse500, NotificationPublishStatus400, NotificationPublishStatus500, OpenForData, OpenForResponse200, OpenForResponse400, OpenForResponse500, OpenForStatus400, OpenForStatus500, ProposedSlots, PushTarget, QueueStatus, QueueStatus400, QueueStatus500, QueueStatusResponse200, QueueStatusResponse400, QueueStatusResponse500, Slot, Statistics, StatisticsResponse200, StatisticsResponse401, StatisticsResponse500, StatisticsStatus401, StatisticsStatus500, SuccessStatus200, VerifyCaptchaParms, VerifyCaptchaRequest, VerifyCaptchaRequestsStatus400, VerifyCaptchaRequestsStatus500, VerifyCaptchaResponse200, VerifyCaptchaResponse400, VerifyCaptchaResponse500, AvailabilityApi, CallInApi, CallbacksApi, EstimatedWaitTimeApi, QueueStatusApi, StatisticsApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CallbackAndRelatedApIs = require('index'); // See note below*.
   * var xxxSvc = new CallbackAndRelatedApIs.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CallbackAndRelatedApIs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CallbackAndRelatedApIs.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CallbackAndRelatedApIs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.000.19.016
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Availabilities model constructor.
     * @property {module:model/Availabilities}
     */
    Availabilities: Availabilities,
    /**
     * The AvailabilitiesResponse200 model constructor.
     * @property {module:model/AvailabilitiesResponse200}
     */
    AvailabilitiesResponse200: AvailabilitiesResponse200,
    /**
     * The AvailabilitiesResponse400 model constructor.
     * @property {module:model/AvailabilitiesResponse400}
     */
    AvailabilitiesResponse400: AvailabilitiesResponse400,
    /**
     * The AvailabilitiesResponse500 model constructor.
     * @property {module:model/AvailabilitiesResponse500}
     */
    AvailabilitiesResponse500: AvailabilitiesResponse500,
    /**
     * The AvailabilitiesStatus400 model constructor.
     * @property {module:model/AvailabilitiesStatus400}
     */
    AvailabilitiesStatus400: AvailabilitiesStatus400,
    /**
     * The AvailabilitiesStatus500 model constructor.
     * @property {module:model/AvailabilitiesStatus500}
     */
    AvailabilitiesStatus500: AvailabilitiesStatus500,
    /**
     * The CallInRequest model constructor.
     * @property {module:model/CallInRequest}
     */
    CallInRequest: CallInRequest,
    /**
     * The CallInRequestsParms model constructor.
     * @property {module:model/CallInRequestsParms}
     */
    CallInRequestsParms: CallInRequestsParms,
    /**
     * The CallInRequestsResponse200 model constructor.
     * @property {module:model/CallInRequestsResponse200}
     */
    CallInRequestsResponse200: CallInRequestsResponse200,
    /**
     * The CallInRequestsResponse400 model constructor.
     * @property {module:model/CallInRequestsResponse400}
     */
    CallInRequestsResponse400: CallInRequestsResponse400,
    /**
     * The CallInRequestsResponse500 model constructor.
     * @property {module:model/CallInRequestsResponse500}
     */
    CallInRequestsResponse500: CallInRequestsResponse500,
    /**
     * The CallInRequestsStatus400 model constructor.
     * @property {module:model/CallInRequestsStatus400}
     */
    CallInRequestsStatus400: CallInRequestsStatus400,
    /**
     * The CallInRequestsStatus500 model constructor.
     * @property {module:model/CallInRequestsStatus500}
     */
    CallInRequestsStatus500: CallInRequestsStatus500,
    /**
     * The Callback model constructor.
     * @property {module:model/Callback}
     */
    Callback: Callback,
    /**
     * The CallbackIdParms model constructor.
     * @property {module:model/CallbackIdParms}
     */
    CallbackIdParms: CallbackIdParms,
    /**
     * The CallbackResponse500 model constructor.
     * @property {module:model/CallbackResponse500}
     */
    CallbackResponse500: CallbackResponse500,
    /**
     * The CallbackStatus500 model constructor.
     * @property {module:model/CallbackStatus500}
     */
    CallbackStatus500: CallbackStatus500,
    /**
     * The CancelCallbackData model constructor.
     * @property {module:model/CancelCallbackData}
     */
    CancelCallbackData: CancelCallbackData,
    /**
     * The CancelCallbackResponse200 model constructor.
     * @property {module:model/CancelCallbackResponse200}
     */
    CancelCallbackResponse200: CancelCallbackResponse200,
    /**
     * The CancelCallbackResponse400 model constructor.
     * @property {module:model/CancelCallbackResponse400}
     */
    CancelCallbackResponse400: CancelCallbackResponse400,
    /**
     * The CancelCallbackResponse404 model constructor.
     * @property {module:model/CancelCallbackResponse404}
     */
    CancelCallbackResponse404: CancelCallbackResponse404,
    /**
     * The CancelCallbackStatus400 model constructor.
     * @property {module:model/CancelCallbackStatus400}
     */
    CancelCallbackStatus400: CancelCallbackStatus400,
    /**
     * The CancelCallbackStatus404 model constructor.
     * @property {module:model/CancelCallbackStatus404}
     */
    CancelCallbackStatus404: CancelCallbackStatus404,
    /**
     * The CreateCallbackData model constructor.
     * @property {module:model/CreateCallbackData}
     */
    CreateCallbackData: CreateCallbackData,
    /**
     * The CreateCallbackParms model constructor.
     * @property {module:model/CreateCallbackParms}
     */
    CreateCallbackParms: CreateCallbackParms,
    /**
     * The CreateCallbackResponse200 model constructor.
     * @property {module:model/CreateCallbackResponse200}
     */
    CreateCallbackResponse200: CreateCallbackResponse200,
    /**
     * The CreateCallbackResponse400 model constructor.
     * @property {module:model/CreateCallbackResponse400}
     */
    CreateCallbackResponse400: CreateCallbackResponse400,
    /**
     * The CreateCallbackResponse429 model constructor.
     * @property {module:model/CreateCallbackResponse429}
     */
    CreateCallbackResponse429: CreateCallbackResponse429,
    /**
     * The CreateCallbackStatus400 model constructor.
     * @property {module:model/CreateCallbackStatus400}
     */
    CreateCallbackStatus400: CreateCallbackStatus400,
    /**
     * The CreateCallbackStatus429 model constructor.
     * @property {module:model/CreateCallbackStatus429}
     */
    CreateCallbackStatus429: CreateCallbackStatus429,
    /**
     * The EstimatedWaitTime model constructor.
     * @property {module:model/EstimatedWaitTime}
     */
    EstimatedWaitTime: EstimatedWaitTime,
    /**
     * The EstimatedWaitTimeResponse200 model constructor.
     * @property {module:model/EstimatedWaitTimeResponse200}
     */
    EstimatedWaitTimeResponse200: EstimatedWaitTimeResponse200,
    /**
     * The EstimatedWaitTimeResponse400 model constructor.
     * @property {module:model/EstimatedWaitTimeResponse400}
     */
    EstimatedWaitTimeResponse400: EstimatedWaitTimeResponse400,
    /**
     * The EstimatedWaitTimeResponse500 model constructor.
     * @property {module:model/EstimatedWaitTimeResponse500}
     */
    EstimatedWaitTimeResponse500: EstimatedWaitTimeResponse500,
    /**
     * The EstimatedWaitTimeStatus400 model constructor.
     * @property {module:model/EstimatedWaitTimeStatus400}
     */
    EstimatedWaitTimeStatus400: EstimatedWaitTimeStatus400,
    /**
     * The EstimatedWaitTimeStatus500 model constructor.
     * @property {module:model/EstimatedWaitTimeStatus500}
     */
    EstimatedWaitTimeStatus500: EstimatedWaitTimeStatus500,
    /**
     * The EstimatedWaitTimes model constructor.
     * @property {module:model/EstimatedWaitTimes}
     */
    EstimatedWaitTimes: EstimatedWaitTimes,
    /**
     * The GetCallbackResponse200 model constructor.
     * @property {module:model/GetCallbackResponse200}
     */
    GetCallbackResponse200: GetCallbackResponse200,
    /**
     * The GetCallbackResponse400 model constructor.
     * @property {module:model/GetCallbackResponse400}
     */
    GetCallbackResponse400: GetCallbackResponse400,
    /**
     * The GetCallbackResponse404 model constructor.
     * @property {module:model/GetCallbackResponse404}
     */
    GetCallbackResponse404: GetCallbackResponse404,
    /**
     * The GetCallbackStatus400 model constructor.
     * @property {module:model/GetCallbackStatus400}
     */
    GetCallbackStatus400: GetCallbackStatus400,
    /**
     * The GetCallbackStatus404 model constructor.
     * @property {module:model/GetCallbackStatus404}
     */
    GetCallbackStatus404: GetCallbackStatus404,
    /**
     * The HashData model constructor.
     * @property {module:model/HashData}
     */
    HashData: HashData,
    /**
     * The NotificationPublish model constructor.
     * @property {module:model/NotificationPublish}
     */
    NotificationPublish: NotificationPublish,
    /**
     * The NotificationPublishParms model constructor.
     * @property {module:model/NotificationPublishParms}
     */
    NotificationPublishParms: NotificationPublishParms,
    /**
     * The NotificationPublishResponse200 model constructor.
     * @property {module:model/NotificationPublishResponse200}
     */
    NotificationPublishResponse200: NotificationPublishResponse200,
    /**
     * The NotificationPublishResponse400 model constructor.
     * @property {module:model/NotificationPublishResponse400}
     */
    NotificationPublishResponse400: NotificationPublishResponse400,
    /**
     * The NotificationPublishResponse500 model constructor.
     * @property {module:model/NotificationPublishResponse500}
     */
    NotificationPublishResponse500: NotificationPublishResponse500,
    /**
     * The NotificationPublishStatus400 model constructor.
     * @property {module:model/NotificationPublishStatus400}
     */
    NotificationPublishStatus400: NotificationPublishStatus400,
    /**
     * The NotificationPublishStatus500 model constructor.
     * @property {module:model/NotificationPublishStatus500}
     */
    NotificationPublishStatus500: NotificationPublishStatus500,
    /**
     * The OpenForData model constructor.
     * @property {module:model/OpenForData}
     */
    OpenForData: OpenForData,
    /**
     * The OpenForResponse200 model constructor.
     * @property {module:model/OpenForResponse200}
     */
    OpenForResponse200: OpenForResponse200,
    /**
     * The OpenForResponse400 model constructor.
     * @property {module:model/OpenForResponse400}
     */
    OpenForResponse400: OpenForResponse400,
    /**
     * The OpenForResponse500 model constructor.
     * @property {module:model/OpenForResponse500}
     */
    OpenForResponse500: OpenForResponse500,
    /**
     * The OpenForStatus400 model constructor.
     * @property {module:model/OpenForStatus400}
     */
    OpenForStatus400: OpenForStatus400,
    /**
     * The OpenForStatus500 model constructor.
     * @property {module:model/OpenForStatus500}
     */
    OpenForStatus500: OpenForStatus500,
    /**
     * The ProposedSlots model constructor.
     * @property {module:model/ProposedSlots}
     */
    ProposedSlots: ProposedSlots,
    /**
     * The PushTarget model constructor.
     * @property {module:model/PushTarget}
     */
    PushTarget: PushTarget,
    /**
     * The QueueStatus model constructor.
     * @property {module:model/QueueStatus}
     */
    QueueStatus: QueueStatus,
    /**
     * The QueueStatus400 model constructor.
     * @property {module:model/QueueStatus400}
     */
    QueueStatus400: QueueStatus400,
    /**
     * The QueueStatus500 model constructor.
     * @property {module:model/QueueStatus500}
     */
    QueueStatus500: QueueStatus500,
    /**
     * The QueueStatusResponse200 model constructor.
     * @property {module:model/QueueStatusResponse200}
     */
    QueueStatusResponse200: QueueStatusResponse200,
    /**
     * The QueueStatusResponse400 model constructor.
     * @property {module:model/QueueStatusResponse400}
     */
    QueueStatusResponse400: QueueStatusResponse400,
    /**
     * The QueueStatusResponse500 model constructor.
     * @property {module:model/QueueStatusResponse500}
     */
    QueueStatusResponse500: QueueStatusResponse500,
    /**
     * The Slot model constructor.
     * @property {module:model/Slot}
     */
    Slot: Slot,
    /**
     * The Statistics model constructor.
     * @property {module:model/Statistics}
     */
    Statistics: Statistics,
    /**
     * The StatisticsResponse200 model constructor.
     * @property {module:model/StatisticsResponse200}
     */
    StatisticsResponse200: StatisticsResponse200,
    /**
     * The StatisticsResponse401 model constructor.
     * @property {module:model/StatisticsResponse401}
     */
    StatisticsResponse401: StatisticsResponse401,
    /**
     * The StatisticsResponse500 model constructor.
     * @property {module:model/StatisticsResponse500}
     */
    StatisticsResponse500: StatisticsResponse500,
    /**
     * The StatisticsStatus401 model constructor.
     * @property {module:model/StatisticsStatus401}
     */
    StatisticsStatus401: StatisticsStatus401,
    /**
     * The StatisticsStatus500 model constructor.
     * @property {module:model/StatisticsStatus500}
     */
    StatisticsStatus500: StatisticsStatus500,
    /**
     * The SuccessStatus200 model constructor.
     * @property {module:model/SuccessStatus200}
     */
    SuccessStatus200: SuccessStatus200,
    /**
     * The VerifyCaptchaParms model constructor.
     * @property {module:model/VerifyCaptchaParms}
     */
    VerifyCaptchaParms: VerifyCaptchaParms,
    /**
     * The VerifyCaptchaRequest model constructor.
     * @property {module:model/VerifyCaptchaRequest}
     */
    VerifyCaptchaRequest: VerifyCaptchaRequest,
    /**
     * The VerifyCaptchaRequestsStatus400 model constructor.
     * @property {module:model/VerifyCaptchaRequestsStatus400}
     */
    VerifyCaptchaRequestsStatus400: VerifyCaptchaRequestsStatus400,
    /**
     * The VerifyCaptchaRequestsStatus500 model constructor.
     * @property {module:model/VerifyCaptchaRequestsStatus500}
     */
    VerifyCaptchaRequestsStatus500: VerifyCaptchaRequestsStatus500,
    /**
     * The VerifyCaptchaResponse200 model constructor.
     * @property {module:model/VerifyCaptchaResponse200}
     */
    VerifyCaptchaResponse200: VerifyCaptchaResponse200,
    /**
     * The VerifyCaptchaResponse400 model constructor.
     * @property {module:model/VerifyCaptchaResponse400}
     */
    VerifyCaptchaResponse400: VerifyCaptchaResponse400,
    /**
     * The VerifyCaptchaResponse500 model constructor.
     * @property {module:model/VerifyCaptchaResponse500}
     */
    VerifyCaptchaResponse500: VerifyCaptchaResponse500,
    /**
     * The AvailabilityApi service constructor.
     * @property {module:api/AvailabilityApi}
     */
    AvailabilityApi: AvailabilityApi,
    /**
     * The CallInApi service constructor.
     * @property {module:api/CallInApi}
     */
    CallInApi: CallInApi,
    /**
     * The CallbacksApi service constructor.
     * @property {module:api/CallbacksApi}
     */
    CallbacksApi: CallbacksApi,
    /**
     * The EstimatedWaitTimeApi service constructor.
     * @property {module:api/EstimatedWaitTimeApi}
     */
    EstimatedWaitTimeApi: EstimatedWaitTimeApi,
    /**
     * The QueueStatusApi service constructor.
     * @property {module:api/QueueStatusApi}
     */
    QueueStatusApi: QueueStatusApi,
    /**
     * The StatisticsApi service constructor.
     * @property {module:api/StatisticsApi}
     */
    StatisticsApi: StatisticsApi
  };

  return exports;
}));
