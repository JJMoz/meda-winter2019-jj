try {

    somefunction();
 } catch (error) {
    console.log("I am sorry we failed to run that function");

        try {
            someOtherFunction();
        } catch (error) {
            console.log("The error " + error.name + " has the follwoing to say " + error.message);
        }


}

console.log("Your program has successfully complete!");