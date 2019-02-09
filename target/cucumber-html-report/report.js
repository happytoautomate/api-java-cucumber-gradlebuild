$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TodoApiTest.feature");
formatter.feature({
  "name": "To write scenarios to test the Todo API using different http request.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking the list of todos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A GET request is send to \"/todo\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the response code is 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the JSON response should",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});