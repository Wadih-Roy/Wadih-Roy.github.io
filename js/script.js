class Smoothie{
    constructor(size,flavor,extras,qunatity,instructions){
        this.size = size;
        this.flavor = flavor;
        this.extras = extras;
        this.qunatity = qunatity;
        this.instructions = instructions;
    }

    Description(){
        // Joins all the "extras" options together with a ", " as a delimiter else writes "None" if none were selected
        let extrasList = this.extras.length ? this.extras.join(", ") : "None";

        // Return function that has all the information that the user inputs
        return `You Ordered ${this.qunatity} ${this.size} ${this.flavor} smoothie with extras: ${extrasList}.
        Special Instructions: ${this.instructions || "None"}` // if Instructions has any text display text else None.
    }
}




function SmoothieDesc(){
    // Declaration of variables that store values from html elements
    let size = document.getElementById("sizeDropdown").value;
    let flavor = document.getElementById("flavorDropdown").value;
    let extras = Array.from(document.querySelectorAll("input[name='extra']:checked")).map(e => e.value);
    let quantity = document.getElementById("quantity").value;
    let instructions = document.getElementById("instructions").value;
    let smoothie = new Smoothie(size,flavor,extras,quantity,instructions);
    let output = document.getElementById("output");

    output.textContent = smoothie.Description();
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Stops the form from refreshing page
    SmoothieDesc(); // Calls the function when button is clicked
});