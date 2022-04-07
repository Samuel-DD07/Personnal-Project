import './App.css';
import React, {useState, useEffect} from "react"
import Question from './components/Question';

function App() {
  const [data, setdata] = useState([{}])

  useEffect(() =>{
    fetch("/dataQuiz").then(
      res => res.json()
    ).then(
        data => {
          setdata(data)
        }
    )
  }, [])

  return(
    <div className='App'>
      {( typeof data.dataQuiz !== 'undefined') ? (
        <Question QuestionList={data.dataQuiz}/>
      ) : (
        <div className='Question' style={{marginTop: "50px"}}>
          <h1>Chargement du quiz ...</h1>
        </div>
      )}
    </div>
  )
}
export default App;
