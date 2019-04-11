# CallbackAndRelatedApIs.CallInRequestsParms

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupName** | **String** | Name of the Click-To-Call-In resource group. | 
**fromPhoneNumber** | **String** | Phone number associated with the request. | [optional] 
**userData** | **String** | A hash map of user-specific data associated with the request. System accepts only hash key names that match valid JavaScript variable names and ignores other names. For privacy reasons, the system does not write all the user data in the application&#39;s log files. | [optional] 
**callbackServiceId** | **String** | A valid callback ID that will be associated with this Click-To-Call-In request. | [optional] 


