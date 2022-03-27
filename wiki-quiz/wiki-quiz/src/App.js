import './App.css';
import Question from './components/Question';
import quizData from './datas/ElementOfTheQuiz';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Question QuestionList={quizData} />
    </div>
  );
}


export default App;
