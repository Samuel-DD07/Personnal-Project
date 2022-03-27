import './App.css';
import Question from './components/Question';
import quizData from './datas/ElementOfTheQuiz';

function App() {
  return (
    <div className="App">
      <Question QuestionList={quizData} Number="0"/>
    </div>
  );
}

export default App;
