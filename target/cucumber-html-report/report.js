$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TodoApiTest.feature");
formatter.feature({
  "name": "Todo Method Test",
  "description": "  To write scenarios to test the Todo API using different http request.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Getting all the list of  todos",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027GET\u0027 request is send using \u0027baseurl\u0027 with parameter \u0027/todos/\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Getting an individual todo using ID 1",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027GET\u0027 request is send using \u0027baseurl\u0027 with parameter \u0027/todos/1\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
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
  "name": "Create new todo list",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027POST\u0027 request is send using \u0027baseurl\u0027 with parameter \u0027/posts\u0027 with the following:",
  "rows": [
    {
      "cells": [
        "title",
        "userId",
        "id",
        "body"
      ]
    },
    {
      "cells": [
        "Watch Movie",
        "123",
        "201",
        "Schedule 1 movie every 2 weeks"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_and_parameter_is_with_the_following(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update the title and body of existing Todo",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027PUT\u0027 request is send using \u0027baseurl\u0027 with parameter \u0027/posts/10\u0027 with the following:",
  "rows": [
    {
      "cells": [
        "title",
        "userId",
        "id",
        "body"
      ]
    },
    {
      "cells": [
        "Go to Gym",
        "1",
        "1",
        "Do 15x push every day"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_and_parameter_is_with_the_following(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete existing todo",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a \u0027DELETE\u0027 request is send using \u0027baseurl\u0027 with parameter \u0027/posts/10\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Api_steps.a_request_is_send_with_with(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Api_steps.the_response_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
});