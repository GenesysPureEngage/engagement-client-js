# CallbackAndRelatedApIs.AvailabilityApi

All URIs are relative to *https://localhost/engagement/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openFor**](AvailabilityApi.md#openFor) | **GET** /callbacks/open-for/{service-name} | Gets Office Open Duration.
[**queryAvailabilityV2**](AvailabilityApi.md#queryAvailabilityV2) | **GET** /callbacks/availability/{service-name} | Gets available timeslots for a given queue.


<a name="openFor"></a>
# **openFor**
> OpenForResponse200 openFor(xApiKey, serviceName, opts)

Gets Office Open Duration.

Retrieves how long the office will stay open in seconds.

### Example
```javascript
var CallbackAndRelatedApIs = require('callback_and_related_ap_is');

var apiInstance = new CallbackAndRelatedApIs.AvailabilityApi();

var xApiKey = "xApiKey_example"; // String | API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep

var serviceName = "serviceName_example"; // String | Name of the callback execution service provisioned in GES.

var opts = { 
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date in ISO 8601 format, using UTC as timezone: YYYY-MM-ddTHH:mm:ssZ. If not specified, the start date is assumed to be now.
  'timezone': "timezone_example" // String | Timezone to use if start and/or end time are not specified in any specific timezone. For a list of possible values, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.openFor(xApiKey, serviceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep | 
 **serviceName** | **String**| Name of the callback execution service provisioned in GES. | 
 **start** | **Date**| Start date in ISO 8601 format, using UTC as timezone: YYYY-MM-ddTHH:mm:ssZ. If not specified, the start date is assumed to be now. | [optional] 
 **timezone** | **String**| Timezone to use if start and/or end time are not specified in any specific timezone. For a list of possible values, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones | [optional] 

### Return type

[**OpenForResponse200**](OpenForResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryAvailabilityV2"></a>
# **queryAvailabilityV2**
> AvailabilitiesResponse200 queryAvailabilityV2(xApiKey, serviceName, opts)

Gets available timeslots for a given queue.

Retrieves a map of slots in which the office capacity is not full.

### Example
```javascript
var CallbackAndRelatedApIs = require('callback_and_related_ap_is');

var apiInstance = new CallbackAndRelatedApIs.AvailabilityApi();

var xApiKey = "xApiKey_example"; // String | API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep

var serviceName = "serviceName_example"; // String | Name of the callback execution service provisioned in GES.

var opts = { 
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date in ISO 8601 format, using UTC as the timezone: yyyy-MM-ddTHH:mm:ss.SSSZ. If not specified, the start date is assumed to be now.
  'startMS': 8.14, // Number | Start date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). You must also set the endMS or numberOfDays parameter; otherwise, the end date is assumed to be the startMS date. If you set the startMS parameter, do not set the start or timestamp parameters.
  'numberOfDays': 8.14, // Number | Used as an alternative to the end date. If neither end nor numberOfDays is specified, the end date is assumed to be the start date.
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date in ISO 8601 format, using UTC as timezone: yyyy-MM-ddTHH:mm:ss.SSSZ. If neither end nor numberOfDays is specified, the end date is assumed to be the start date.
  'endMS': 8.14, // Number | End date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). Set only one of the end, endMS, or numberOfDays parameters.
  'timezone': "timezone_example", // String | Timezone for the start and end date parameters. If not specified, the default is UTC. Additionally, the response object will return the localTime fields formatted in this timezone. For a list of possible values, see the TZ column of the list in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  'maxTimeSlots': 8.14, // Number | Maximum number of time slots to include in the response when the office is open and its capacity is above zero. Use this parameter to improve the performance of the query over a long period of time.
  'reportBusy': true // Boolean | If true, the response includes the slots where the office is open and where callbacks are booked to full capacity. By default, reportBusy is false.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryAvailabilityV2(xApiKey, serviceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep | 
 **serviceName** | **String**| Name of the callback execution service provisioned in GES. | 
 **start** | **Date**| Start date in ISO 8601 format, using UTC as the timezone: yyyy-MM-ddTHH:mm:ss.SSSZ. If not specified, the start date is assumed to be now. | [optional] 
 **startMS** | **Number**| Start date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). You must also set the endMS or numberOfDays parameter; otherwise, the end date is assumed to be the startMS date. If you set the startMS parameter, do not set the start or timestamp parameters. | [optional] 
 **numberOfDays** | **Number**| Used as an alternative to the end date. If neither end nor numberOfDays is specified, the end date is assumed to be the start date. | [optional] 
 **end** | **Date**| End date in ISO 8601 format, using UTC as timezone: yyyy-MM-ddTHH:mm:ss.SSSZ. If neither end nor numberOfDays is specified, the end date is assumed to be the start date. | [optional] 
 **endMS** | **Number**| End date in epoch time, that is, the number of milliseconds since 00:00:00, Thursday, 1 January 1970 (UTC). Set only one of the end, endMS, or numberOfDays parameters. | [optional] 
 **timezone** | **String**| Timezone for the start and end date parameters. If not specified, the default is UTC. Additionally, the response object will return the localTime fields formatted in this timezone. For a list of possible values, see the TZ column of the list in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones | [optional] 
 **maxTimeSlots** | **Number**| Maximum number of time slots to include in the response when the office is open and its capacity is above zero. Use this parameter to improve the performance of the query over a long period of time. | [optional] 
 **reportBusy** | **Boolean**| If true, the response includes the slots where the office is open and where callbacks are booked to full capacity. By default, reportBusy is false. | [optional] 

### Return type

[**AvailabilitiesResponse200**](AvailabilitiesResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

