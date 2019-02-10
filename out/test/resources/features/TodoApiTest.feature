Feature: Todo Method Test

  To write scenarios to test the Todo API using different http request.

  Scenario: Getting all the list of  todos
   Given a 'GET' request is send using 'baseurl' with parameter '/todos/'
    Then the response status code is 200

  Scenario: Getting an individual todo using ID 1
    Given a 'GET' request is send using 'baseurl' with parameter '/todos/1'
    Then the response status code is 200
    And has schema "id,userId,title"

  Scenario: Create new todo list
    When a 'POST' request is send using 'baseurl' with parameter '/posts' with the following:
       | title       | userId | id | body |
       | Watch Movie | 123    | 201 | Schedule 1 movie every 2 weeks |
    Then the response status code is 201

  Scenario: Update the title and body of existing Todo
    When a 'PUT' request is send using 'baseurl' with parameter '/posts/10' with the following:
      | title | userId | id | body |
      | Go to Gym | 1 | 1 | Do 15x push every day  |
    Then the response status code is 200

  Scenario: Delete existing todo
    When a 'DELETE' request is send using 'baseurl' with parameter '/posts/10'
    Then the response status code is 200








