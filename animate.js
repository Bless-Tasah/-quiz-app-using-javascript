//Questions will be asked
const Questions = [{
    id: 0,
    q:"what is the full meaning of the acronym HTML?",
    a: [{ text: "Hyber-Text Transfer Protocol", isCorrect: false },
        { text: "Hyber-Text pre-processor", isCorrect: false },
        { text: "Hyber-Text Markup Language", isCorrect: true },
        { text: "Hyber-Text Transfer Protocol-secured", isCorrect: false },
    ]

},
{
    id: 1,
    q: "What is the default port number of HTTPS?",
    a: [{text: "443", isCorrect: true, isSelected: false},
        {text: "21", isCorrect: false },
        {text: "80", isCorrect: false },
        {text: "3306", isCorrect: false }
    ]
},
{
    id: 2,
    q: "What is the default port number of MySQL",
    a: [{text: "8080", isCorrect: false} ,
        {text: "22", isCorrect: false} ,
        {text: "21", isCorrect: false} ,
        {text: "3306", isCorrect: true} ,

     ]
  }

]

//set start
var start = true;

//Iterate
function Iterate(id){

    //Getting the resylt display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    //Getting the question
    const question = document.getElementById("question");

    //Setting the question text
    question.innerText = Questions[id].q;

    //  Getting the questions
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    //Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var isSelected = "";

    //Show selection for op1
    op1.addEventListener("click"), () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    } //come back and check erro here
    
        //Show selection for op2
        op2.addEventListener("click"), () => {
            op1.style.backgroundColor = "lightskyblue";
            op2.style.backgroundColor = "lightgoldenrodyellow";
            op3.style.backgroundColor = "lightskyblue";
            op4.style.backgroundColor = "lightskyblue";
            selected = op2.value;
    }//come back and check erro here
    
     //Show selection for op3
        op3.addEventListener("click"), () => {
            op1.style.backgroundColor = "lightskyblue";
            op2.style.backgroundColor = "lightskyblue";
            op3.style.backgroundColor = "lightgoldenrodyellow";
            op4.style.backgroundColor = "lightskyblue";
            selected = op3.value;
    }//come back and check erro here
    
    //Show selection for op4
           op4.addEventListener("click"), () => {
               op1.style.backgroundColor = "lightskyblue";
               op2.style.backgroundColor = "lightskyblue";
               op3.style.backgroundColor = "lightg";
               op4.style.backgroundColor = "lightgoldenrodyellow";
               selected = op4.value;
       }//come back and check erro here
       
       //Grabbing the evaluate button
       const evaluate = document.getElementsByClassName("evaluate");

       //Evaluate method
       evaluate[0].addEventListener("click", () => {
        if (selected == "true"){
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        }else{
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
       } ) //no erro here

}

if(start){
    Iterate("0");
}
// Previous button and method
//Next button and method
const Next = document.getElementsByClassName('next')[0];
var id = 0;

Next.addEventListener("click", () => {
    start = false;
    if(id < 2){
        id++;
        Iterate(id);
        console.log(id);
    }
})
