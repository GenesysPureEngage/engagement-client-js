/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 9.0.18
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CallbackAndRelatedApIs);
  }
}(this, function(expect, CallbackAndRelatedApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CallbackAndRelatedApIs.CreateCallbackParms();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateCallbackParms', function() {
    it('should create an instance of CreateCallbackParms', function() {
      // uncomment below and update the code to test CreateCallbackParms
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be.a(CallbackAndRelatedApIs.CreateCallbackParms);
    });

    it('should have the property serviceName (base name: "serviceName")', function() {
      // uncomment below and update the code to test the property serviceName
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property desiredTime (base name: "desiredTime")', function() {
      // uncomment below and update the code to test the property desiredTime
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property cbOfferType (base name: "cbOfferType")', function() {
      // uncomment below and update the code to test the property cbOfferType
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property inboundVQ (base name: "inboundVQ")', function() {
      // uncomment below and update the code to test the property inboundVQ
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property offerThreshold (base name: "offerThreshold")', function() {
      // uncomment below and update the code to test the property offerThreshold
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property offerTiming (base name: "offerTiming")', function() {
      // uncomment below and update the code to test the property offerTiming
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property cbOriginationIxnId (base name: "cbOriginationIxnId")', function() {
      // uncomment below and update the code to test the property cbOriginationIxnId
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property surveyRP (base name: "surveyRP")', function() {
      // uncomment below and update the code to test the property surveyRP
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property routePoint (base name: "routePoint")', function() {
      // uncomment below and update the code to test the property routePoint
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property userData (base name: "userData")', function() {
      // uncomment below and update the code to test the property userData
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property captchaToken (base name: "captchaToken")', function() {
      // uncomment below and update the code to test the property captchaToken
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property pushChannel (base name: "pushChannel")', function() {
      // uncomment below and update the code to test the property pushChannel
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

    it('should have the property pushTarget (base name: "pushTarget")', function() {
      // uncomment below and update the code to test the property pushTarget
      //var instance = new CallbackAndRelatedApIs.CreateCallbackParms();
      //expect(instance).to.be();
    });

  });

}));
