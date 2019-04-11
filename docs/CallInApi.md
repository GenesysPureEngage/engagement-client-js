# CallbackAndRelatedApIs.CallInApi

All URIs are relative to *https://localhost/engagement/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callInRequests**](CallInApi.md#callInRequests) | **POST** /call-in/requests/create | Creates a Click-to-call-in request.


<a name="callInRequests"></a>
# **callInRequests**
> CallInRequestsResponse200 callInRequests(xApiKey, body)

Creates a Click-to-call-in request.

Creates a Click-To-Call-in request to retrieve the inbound call instructions such as the number to dial and an optional pin.

### Example
```javascript
var CallbackAndRelatedApIs = require('callback_and_related_ap_is');

var apiInstance = new CallbackAndRelatedApIs.CallInApi();

var xApiKey = "xApiKey_example"; // String | API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep

var body = new CallbackAndRelatedApIs.CallInRequestsParms(); // CallInRequestsParms | Request properties.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.callInRequests(xApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**| API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep | 
 **body** | [**CallInRequestsParms**](CallInRequestsParms.md)| Request properties. | 

### Return type

[**CallInRequestsResponse200**](CallInRequestsResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

