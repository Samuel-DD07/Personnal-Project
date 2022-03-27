const Question = (props) =>{
    const { QuestionList, Number } = props
    const thisQuestion = QuestionList["Question-" + Number]
    return (
        <div>
            <h3>Qui est cette personne ?</h3>
            <img src={thisQuestion["Picture"]} alt="PictureThatYouHaveToFind"/>
            {console.log(thisQuestion["AllAnswer"])}
            <ul>
                {thisQuestion["AllAnswer"].map((answer) =>
                    <li key={answer.toString()}>{answer}</li>
                )}
            </ul>
        </div>
    )
}

export default Question