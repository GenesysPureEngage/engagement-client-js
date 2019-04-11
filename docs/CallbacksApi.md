# CallbackAndRelatedApIs.CallbacksApi

All URIs are relative to *https://localhost/engagement/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookCallbackExternal**](CallbacksApi.md#bookCallbackExternal) | **POST** /callbacks/create | Creates a new callback.
[**cancelCallback**](CallbacksApi.md#cancelCallback) | **POST** /callbacks/cancel | Cancels an existing callback.
[**queryCallbackById**](CallbacksApi.md#queryCallbackById) | **POST** /callbacks/retrieve | Queries an existing callback.


<a name="bookCallbackExternal"></a>
# **bookCallbackExternal**
> CreateCallbackResponse200 bookCallbackExternal(xApiKey, body)

Creates a new callback.

Initiates a callback request.

### Example
```javascript
var CallbackAndRelatedApIs = require('callback_and_related_ap_is');

var apiInstance = new CallbackAndRelatedApIs.CallbacksApi();

var xApiKey = "xApiKey_example"; // String | API Key

var body = new CallbackAndRelatedApIs.CreateCallbackParms(); // CreateCallbackParms | Callback properties.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bookCallbackExternal(xApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| API Key | 
 **body** | [**CreateCallbackParms**](CreateCallbackParms.md)| Callback properties. | 

### Return type

[**CreateCallbackResponse200**](CreateCallbackResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelCallback"></a>
# **cancelCallback**
> CancelCallbackResponse200 cancelCallback(xApiKey, body)

Cancels an existing callback.

Cancels an existing callback by its callback ID.

### Example
```javascript
var CallbackAndRelatedApIs = require('callback_and_related_ap_is');

var apiInstance = new CallbackAndRelatedApIs.CallbacksApi();

var xApiKey = "xApiKey_example"; // String | API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep

var body = new CallbackAndRelatedApIs.CallbackIdParms(); // CallbackIdParms | Callback properties.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelCallback(xApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep | 
 **body** | [**CallbackIdParms**](CallbackIdParms.md)| Callback properties. | 

### Return type

[**CancelCallbackResponse200**](CancelCallbackResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryCallbackById"></a>
# **queryCallbackById**
> GetCallbackResponse200 queryCallbackById(xApiKey, body)

Queries an existing callback.

Queries an existing callback by its callack ID.

### Example
```javascript
var CallbackAndRelatedApIs = require('callback_and_related_ap_is');

var apiInstance = new CallbackAndRelatedApIs.CallbacksApi();

var xApiKey = "xApiKey_example"; // String | API Key

var body = new CallbackAndRelatedApIs.CallbackIdParms(); // CallbackIdParms | Callback properties.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryCallbackById(xApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| API Key | 
 **body** | [**CallbackIdParms**](CallbackIdParms.md)| Callback properties. | 

### Return type

[**GetCallbackResponse200**](GetCallbackResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

