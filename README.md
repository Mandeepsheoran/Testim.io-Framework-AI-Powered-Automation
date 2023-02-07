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
