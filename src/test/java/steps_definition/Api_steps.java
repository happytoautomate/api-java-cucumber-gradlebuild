package steps_definition;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import com.jayway.restassured.response.ValidatableResponse;
import com.jayway.restassured.specification.RequestSpecification;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.deps.com.google.gson.JsonObject;
import io.cucumber.datatable.DataTable;
import managers.FileReaderManager;
import com.jayway.restassured.*;
import org.junit.Assert;

import java.util.Map;
import java.util.StringTokenizer;

public class Api_steps {

    private RequestSpecification request;
    private ValidatableResponse response;


    private void executeRequest(String param, String requestMethod, String url) {
        executeRequest(requestMethod, url, param, null);
    }

    private void executeRequest(String requestMethod, String url, String param, io.cucumber.datatable.DataTable dataTable) {

        switch (requestMethod) {
            case "GET":
                response = request.get(url).then();

                break;

            case "POST":
                // Create json object
                JsonObject newObject = new JsonObject();

                // Counter for column number in datatable
                int ctr = 0;
                // Loop the first row, which contains the column names
                for (String column : dataTable.rows(0,1).asList()){
                    // add the column name and the value using cell reference row 1, cell number
                    newObject.addProperty(column, dataTable.cell(1, ctr));
                    // increment the counter so we can move on to the next column
                    ctr ++ ;
                }

                System.out.println(newObject.toString() + " NEW OBJ");

                // Send POST request to url, sending the json object as body
                response = request.header("Content-Type", "application/json")
                    .body(newObject.toString())
                        .when().post(url + param).then();

                break;

            case "PUT":
                // Create json object
                JsonObject putObject = new JsonObject();

                // Counter for column number in datatable
                int ctr1 = 0;
                // Loop the first row, which contains the column names
                for (String column : dataTable.rows(0,1).asList()){
                    // add the column name and the value using cell reference row 1, cell number
                    putObject.addProperty(column, dataTable.cell(1, ctr1));
                    // increment the counter so we can move on to the next column
                    ctr1 ++ ;
                }

                System.out.println(putObject.toString() + " NEW OBJ");

                // Send Update request to url, sending the json object as body
                response = request.header("Content-Type", "application/json")
                        .body(putObject.toString())
                        .when().put(url).then();
                break;


            case "DELETE":
                break;
        }
    }

    @Before
    public void before(Scenario scenario) {
        request = RestAssured.with();
    }

/*
    @Given("a {string} request is send with {string}")
    public void a_request_is_send_with(String requestMethod, String endPointUrl) {
        // Initialize config reader
        dataProviders.ConfigFileReader reader = FileReaderManager.getInstance().getConfigReader();
        // Get the url from the config file using the endPointUrl as key
        String url = reader.getApplicationUrl(endPointUrl);
        // Execute the call based on the request method

        executeRequest(requestMethod, url);

        System.out.println(requestMethod + " " + endPointUrl);
    }*/

    @Then("the response code is {int}")
    public void the_response_code_is(Integer code) {
        response.statusCode(code);
    }


    @Given("a {string} request is send with {string} and parameter is {string}")
    public void a_request_is_send_with_with(String requestMethod, String endPointUrl, String param) {
        // Initialize config reader
        dataProviders.ConfigFileReader reader = FileReaderManager.getInstance().getConfigReader();
        // Get the url from the config file using the endPointUrl as key
        String url = reader.getApplicationUrl(endPointUrl);
        // Execute the call based on the request method

        executeRequest(requestMethod, url, param);

    }
/*
    @When("a {string} request is send with {string} with the following:")
    public void a_request_is_send_with_with_the_following(String requestMethod, String endPointUrl, io.cucumber.datatable.DataTable dataTable) {

        dataProviders.ConfigFileReader reader = FileReaderManager.getInstance().getConfigReader();

        // For other transformations you can register a DataTableType.
        String url = reader.getApplicationUrl(endPointUrl);

        executeRequest(requestMethod, url, dataTable);
    }*/

    @Then("has schema {string}")
    public void has_schema(String schema) {
        // Get the response body as json
        Response body = response.contentType(ContentType.JSON).extract().response();
        // Set the map as the root object of the response, hence path is = ""
        Map<String, String> map = body.jsonPath().getMap("");

        // Parse the schema delimited by comma
        StringTokenizer st = new StringTokenizer(schema, ",");
        while (st.hasMoreElements()) {
            Assert.assertTrue(map.containsKey(st.nextElement()));
        }
        System.out.println(map);

    }


    @When("a {string} request is send with {string} and parameter is {string} with the following:")
    public void a_request_is_send_with_and_parameter_is_with_the_following(String requestMethod, String endPointUrl, String param, io.cucumber.datatable.DataTable dataTable) {

        dataProviders.ConfigFileReader reader = FileReaderManager.getInstance().getConfigReader();

        // For other transformations you can register a DataTableType.
        String url = reader.getApplicationUrl(endPointUrl);

        executeRequest(requestMethod, url, param, dataTable);
    }
}

