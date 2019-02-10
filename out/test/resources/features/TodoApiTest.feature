Feature: To write scenarios to test the Todo API using different http request.


  Scenario: Checking the list of all todos
   Given a 'GET' request is send with 'baseurl' and parameter is '/todos/'
    Then the response code is 200


  Scenario: Checking the list individual todo using id = 1
    Given a 'GET' request is send with 'baseurl' and parameter is '/todos/1'
    Then the response code is 200
    And has schema "id,userId,title"

  Scenario: Post test
    When a 'POST' request is send with 'baseurl' and parameter is '/posts' with the following:
       | title | userId | id |
       | AddMe | 123 | 201 |
    Then the response code is 201


  Scenario: PUT test
    When a 'PUT' request is send with 'baseurl' and parameter is '/posts/10' with the following:
      | title | userId | id | body |
      | UpdateMe | 1 | 1 | testing |
    Then the response code is 201

  Scenario: Delete test
    When a 'DELETE' request is send with 'baseurl' and parameter is '/posts/10'
    Then the response code is 200









