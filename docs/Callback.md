# CallbackAndRelatedApIs.Callback

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The callback ID. | [optional] 
**desiredTime** | **Date** | Desired time of the callback in UTC. | [optional] 
**callbackState** | **String** | Current state of the callback. Possible values are - SCHEDULED, QUEUED, ROUTING, PROCESSING, COMPLETED. | [optional] 
**callbackReason** | **String** | Provides a reason for completion. This is only provided if the callback is in a COMPLETED state. | [optional] 
**phoneNumber** | **String** | Number to call back. | [optional] 
**positionInQueue** | **Number** | Position in queue. This property is only provided if the callback is in one of the following state - QUEUED, ROUTING, or PROCESSING. | [optional] 
**estimatedWaitTime** | **Number** | Expected waiting time (in seconds). This property is only provided if the callback is in one of the following state - QUEUED, ROUTING, or PROCESSING. | [optional] 


