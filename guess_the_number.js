let random_number = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let min_number = 1, max_number = 100;
let user_input = Number.parseInt(prompt("Enter a number : "));

while (true) {
    if (user_input > random_number) {
        console.log("Your number is big");
        console.log("Try again...");
        user_input = Number.parseInt(prompt("Enter a number : "));
        chances++;
    }
    else if (user_input < random_number) {
        console.log("Your number is small");
        console.log("Try again...");
        user_input = Number.parseInt(prompt("Enter a number : "));
        chances++;
    }else {
        console.log(typeof user_input);
        console.log("YOU WIN :)");
        console.log("Your score is : " + (max_number - chances));
        break;
    }

}