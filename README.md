A simple page model example with TestCafe, for more info about this example and TestCafe, 
you can visit their documentation here: 

https://devexpress.github.io/testcafe/documentation/recipes/using-page-model.html



*Installation*

Ensure that Node.js (version 6 or newer) and npm are installed on your computer before running it:

Go to the project root directory and run on console:


- 'yarn' - to download the node modules
- create .env file in the root of the project and add URL variable.

        export URL="https://devexpress.github.io/testcafe/example/" 

I added some script examples for running the tests inside functionalTest folder, you can find them inside package.json 

- Example: 'yarn test:functional:chrome' or you can use 'yarn test:functional:chrome:with:report' to run the tests and generate a html file in root folder/test-reports



For more information about TestCafe: 

- Git repo: https://github.com/DevExpress/testcafe
