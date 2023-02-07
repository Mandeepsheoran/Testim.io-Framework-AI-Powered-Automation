# Testim.io-Framework-AI-Powered-Automation

Testim.io is an AI powered automation tool which provides both Record/Play as well coding platform to automate the application.

It support Web Application, Mobile Application, API call testing from single platform.

This framework is designed with typescript code which is generated from Testim and tyen modified on local.

Testim provide inbuilt feature for accessibility testing as well against WCAG rules and corresponding test cases are included in this framework.

Run below command to run the test on local:

npm i -g @testim/testim-cli && testim --token "mcfX6XVQdkkGFdFacHNYSSphcatmX4ckZut2rI5s3Bkc1jc9C8" --project "EWaSwYpe1URF7xX5LC6B" --use-local-chrome-driver --user 7V8bmMRoWrMviVGrghCV

Token and project value need to be changed while running on local.

To run it on CI server like Azure pipeline, we have included the corresponding azure pipeline yamal file in code.

We can run this on code on Selenium grid as well to support multiple browser/OS testing. Third party platforms like Browserstack, Saucelab can also be used to run these test cases.

This framework currently has test cases for web testing, api testing, accessibility testing. Mobile related test cases are not currently not part of this project.

Steps to create testim project:

1. Export test to local from Testim UI.
2. Create a directory at local and run command "testim --login" to sync the credentials.
3. Run command "testim init" to download the testim dependency on local.
4. Once it will download, it will create npm modules and package.json file along with test folder.
5. Now we can copy testim exported js/ts files under test folder on testim directory.
6. We can now run the test using "npm start" from test folder.
7. If code is exported in typescript then we have to change it to js extension before running "npm start".
8. This should execute the test on local using javascript code and cli.
