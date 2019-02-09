package steps_definition;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="src/test/resources",
        glue= {"src/test/java/steps_definition"},
        plugin = {"pretty", "html:target/cucumber-html-report", "json:cucumber.json"},
        monochrome = true
)

public class TestRunner { }
