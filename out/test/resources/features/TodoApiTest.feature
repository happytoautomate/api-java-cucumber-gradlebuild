Feature: To write scenarios to test the Todo API using different http request.


  Scenario: Checking the list of todos
   Given A GET request is send to "/todo"
    Then the response code is 200
    And the JSON response should


