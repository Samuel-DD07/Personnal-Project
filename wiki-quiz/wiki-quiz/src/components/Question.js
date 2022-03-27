import { useState } from "react"

let MyScore = 0

const Question = (props) =>{
    const { QuestionList } = props 
    const [numberQuestion, nextQuestion] = useState(0)

    function UpdateQuestion (MyAnswer, GoodAnswer){
        nextQuestion(numberQuestion + 1)
        if (MyAnswer === GoodAnswer){
            MyScore += 10
        }
        console.log("Mon Score est", MyScore)
    }

    
    const thisQuestion = QuestionList["Question-" + numberQuestion]
    const AllOfAnswer = shuffleArray(thisQuestion["AllAnswer"])

    return (
        <div>
            <h3>Qui est cette personne ?</h3>
            <img src={thisQuestion["Picture"]} alt="PictureThatYouHaveToFind"/>
            <ul>
                {AllOfAnswer.map((answer) =>
                    <li 
                    key={answer.toString()} 
                    onClick={() => 
                        UpdateQuestion(answer, thisQuestion["GoodAnswer"]) }>
                            {answer}
                    </li>
                )}
            </ul>
        </div>
    )
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

export default Question