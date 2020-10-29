package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Admin\\eclipse-workspace\\Learncucumber\\src\\main\\java\\Features\\Myapptest.feature",
glue= {"stepDefinition"},
plugin= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:target/cucumber.xml"},
dryRun= false,
strict=true,
monochrome=true
		)

public class TestRunner {

}
