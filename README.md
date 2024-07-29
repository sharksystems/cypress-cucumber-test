# cypress-cucumber-test

## Summary

This repository contains automated tests for the Conduit website (https://conduit.realworld.how/) using Cypress framework and Cucumber. Tests are written in JavaScript following Page Object pattern.

## Requirements

- Node.js (v14 or later)
- Cypress

For working with tests in Visual Studio Code, Cucumber (Gherkin) Full Support or similar extention is recommended

## Steps to Install

1. Clone the repository or go to Code > Download ZIP
2. Install dependencies: npm install

## Steps to Launch Tests

Open Cypress Test Runner:

npx cypress open

Or run tests in headless mode:

npx cypress run

or

npm test

## Steps to Create and View the Report
After running tests, generate a report using this command:

npm run report

Navigate to cypress/reports/merged-report and open the merged-report.html file to open the report
