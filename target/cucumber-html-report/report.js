$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TodoApiTest.feature");
formatter.feature({
  "name": "To write scenarios to test the Todo API using different http request.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking the list of all todos",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027GET\u0027 request is send with \u0027todosApiURL\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking the list individual todo using id \u003d 1",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027GET\u0027 request is send with \u0027todosApiURL\u0027 and parameter is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_with(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "has schema \"id,userId,title\"",
  "keyword": "And "
});
formatter.match({
  "location": "Api_steps.has_schema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post test",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027POST\u0027 request is send with \u0027todosApiURL\u0027 with the following:",
  "rows": [
    {
      "cells": [
        "title",
        "userId",
        "id"
      ]
    },
    {
      "cells": [
        "AddMe",
        "123",
        "201"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_with_the_following(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PUT test",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027PUT\u0027 request is send with \u0027todosApiURL\u0027 with the following:",
  "rows": [
    {
      "cells": [
        "title",
        "userId",
        "id"
      ]
    },
    {
      "cells": [
        "UpdateMe",
        "123",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_with_the_following(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c404\u003e.\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:238)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:250)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:598)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:760)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:169)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\n\tat com.jayway.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\n\tat com.jayway.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\n\tat steps_definition.Api_steps.the_response_code_is(Api_steps.java:114)\n\tat ✽.the response code is 201(src/test/resources/features/TodoApiTest.feature:26)\n",
  "status": "failed"
});
});