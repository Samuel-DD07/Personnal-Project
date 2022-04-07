import { useState } from "react"

let MyScore = 0

const Question = (props) =>{
    const { QuestionList } = props 
    let [ numberQuestion, nextQuestion] = useState(0)

    function UpdateQuestion (MyAnswer, GoodAnswer){
        nextQuestion(numberQuestion + 1)
        if (MyAnswer === GoodAnswer){
            MyScore += 1
        }
    }
    
    const thisQuestion = QuestionList["Question-" + numberQuestion]
    const AllOfAnswer = shuffleArray(thisQuestion["AllAnswer"])
    const DataLen = Object.keys(QuestionList).length - 1

    if (numberQuestion < DataLen){
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <img src="https://logo-marque.com/wp-content/uploads/2020/09/Wikipedia-Embleme.png" alt="logo"/>
                            <li>Questions restant : {DataLen - numberQuestion}</li>
                        </ul>
                    </nav>
                </header>
    
                <div className="Question">
                    <h1>Qui est cette personne ?</h1>
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
            </div>
        )
    }
    else {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <img src="https://logo-marque.com/wp-content/uploads/2020/09/Wikipedia-Embleme.png" alt="logo"/>
                            <li>Score : {MyScore}</li>
                        </ul>
                    </nav>
                </header>


                <div className="Question">
                    <div className="FinalScore">
                        <h1>Ton score est de : {MyScore} / {(DataLen)} </h1>
                        <h1>J'ai la flemme de te féliciter ou te dire que t'es nul !! 🤫</h1>
                        <button onClick={refreshPage}>Tu veux rejouer ?</button>
                    </div>
                </div>
            </div>
        )
    }
}

function refreshPage() {
    window.location.reload(false);
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