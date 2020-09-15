
console.log('hello!!!');

var qIndex = 0
var questions = [
    {
        question: 'What language is used for styling??',
        choices: ['Node', "Javascript", "CSS", "Express"],
        correctAnswer: 'CSS'
    },
    {
        question: 'What does === compare that == does not',
        choices: ['type', 'value', 'length', 'addition'],
        correctAnswer: 'type'
    },
    {
        question: 'What language would you use to dynamically add a button to a page?',
        choices: ['node', 'mysql', "javascript", 'handlebars'],
        correctAnswer: 'javascript'
    },
    {
        question: 'What would you put "[]" around?',
        choices: ['string', 'variable', 'object', 'array'],
        correctAnswer: 'array'
    },
    {
        question: 'What data type is "example"',
        choices: ['attribute', 'string', 'array', 'object'],
        correctAnswer: 'string'
    }

]

var currentIndex = 0
var questionCorrect = 0
var questionIncorrect = 0

$(document).on("click", ".choice", function(){
    console.log("You got clicked!! CHOICE!!!", $(this).text())
    if($(this).text() === questions[currentIndex].correctAnswer) {
        console.log("you got it right!!")
        questionCorrect++
        
    } else {
        questionIncorrect++
    };

    console.log('questionCorrect : ', questionCorrect, 'questionIncorrect: ',questionIncorrect)
    currentIndex++

    if(currentIndex === questions.length) {
        reset()
    } else {
        displayQuestion();
    }


    
})


function displayQuestion() {
    // append the question on the page!!
    $('#question-spot').empty()
    $('#answer-spot').empty()
    console.log('questions[0].text',questions[currentIndex].question)
    var qTest = $('<h1>')
    qTest.text(questions[currentIndex].question)
    $('#question-spot').append(qTest)


    for (let i = 0; i < questions[currentIndex].choices.length; i++) {
        
       console.log('looping ??', i) 

       var answer = $("<button>")
       answer.text(questions[currentIndex].choices[i])
       answer.addClass("choice")
       $("#answer-spot").append(answer)

    }
   

}

// empty everything off the page
function reset() {
    $('#question-spot').empty()
    $('#answer-spot').empty()
    // alert('Congratulations!! Check Score Below! ')

    

    // append the score 
    var score = $("<h3>")
    score.text(questionCorrect)
    score.addClass("#score-spot")
    $('#score-spot').append("Score: ", questionCorrect)

    // append start ubtton 
    qTest.text(questions[currentIndex].question)
    $('#start-btn').append(qTest)
    
}
    // Buttons
    $('#start-btn').on("click", function(){
        displayQuestion();
    });

    $('#reset-btn').on("click", function(){
        $('#question-spot').empty()
        $('#answer-spot').empty()
        $('#score-spot').empty()
    });
    displayQuestion();
