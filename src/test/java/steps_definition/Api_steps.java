package steps_definition;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.ValidatableResponse;
import com.jayway.restassured.specification.RequestSpecification;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Api_steps  {

    private RequestSpecification request;
    private ValidatableResponse response;

    @Before
    public void before(Scenario scenario) {
        request = RestAssured.with();
    }



    @Given("A GET request is send to {string}")
    public void a_GET_request_is_send_to(String string) {




        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


    @Then("the response code is {int}")
    public void the_response_code_is(Integer code) {
    response.statusCode(code);
    }

    @Then("the JSON response should:")
    public void the_JSON_response_should() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

}
