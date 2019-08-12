// Problem 1
// Asks the user to enter 1 for 'count down' and 2 for 'count up'. Keep ask them them to do that until they enter 'q' to quit.
// If they enter 1, ask them what they want to count down to. Start from 0 and count down to that number by ones.
// If they enter 2, ask them what they want to count up to. Start from 0 and count up to the number by ones.
//
var userInput = prompt("Please enter 1 to count down, 2 to count up or q to quit.")
while (userInput!=='q')
    {
        if(userInput==='1')
        {
            var userInput = parseInt(prompt("What would you like to count down to?"));
            for(var x=0; x<userInput; x++)
            {
                console.log(x);
                userInput--;

            }

        }
        else if (userInput==='2')
        {
            var userInput = parseInt(prompt("What would you like to count up to?"));
            console.log(userInput);
            for(x=0; x<userInput; x++)
            {
                console.log(x);
                userInput++;
            }
        }
         userInput = prompt("Press 1 to count down. Press 2 to count up. Press q to quit");

    }
//     Challenge
// Asks the user to enter their name and keep asking them until they enter 'quit' to quit.
// If they enter Kevin say 'What's up Kevin'. If they enter Kenn say 'Hi Kenn'.
// If they enter Autumn say 'Good morning Autumn'. If they don't enter any of those names say 'Hello [NAME]'.
//
var userName = prompt("What is your name? Press q to quit");
while(userName!=='q')
    {
        if (userName==='Kevin'){
            alert("What's up Kevin?");
        }
        else if (userName==='Kenn'){
            alert("Hi Kenn!");
            }
        else if(userName==='Autumn'){
            alert("Good Morning, Autumn!");
        }
        else{
            alert("Hello "+ userName);
        }
        userInput = prompt("What is your name? Press q to quit");
    }
