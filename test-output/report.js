$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Admin/eclipse-workspace/Learncucumber/src/main/java/Features/Myapptest.feature");
formatter.feature({
  "line": 1,
  "name": "Test CRM application smoke",
  "description": "",
  "id": "test-crm-application-smoke",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Login functionality of CRM",
  "description": "",
  "id": "test-crm-application-smoke;verify-login-functionality-of-crm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is freeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "test1@mailinator.com",
        "Ajeesha@29"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the title of home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user navigate to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter data details",
  "rows": [
    {
      "cells": [
        "Mr.",
        "test1company",
        "",
        "testproducts",
        "testcompany",
        "testtag"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Dealsstepdefinitions.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 23407261577,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.title_of_login_page_is_freeCRM()"
});
formatter.result({
  "duration": 9747106,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 605940979,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.user_clicks_on_login_page()"
});
formatter.result({
  "duration": 268185269,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.verify_the_title_of_home_page()"
});
formatter.result({
  "duration": 4846611,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.user_moves_to_deals_page()"
});
formatter.result({
  "duration": 7482784546,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.user_navigate_to_new_deals_page()"
});
formatter.result({
  "duration": 316277180,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.enter_and(DataTable)"
});
formatter.result({
  "duration": 485128521,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.select_save_button()"
});
formatter.result({
  "duration": 243690062,
  "status": "passed"
});
formatter.match({
  "location": "Dealsstepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 2663152200,
  "status": "passed"
});
});