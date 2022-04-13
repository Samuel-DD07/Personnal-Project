import styled from "styled-components"
import Logo from "./Logo"
import Link from "./Link"

const QuizHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100px;
    font-size: 30px;
`

const SectionQuiz = styled.section`

`

const QuizFooter = styled.footer`

`


const Quiz = () => {
    return (
        <div>
            <QuizHeader>
                <Logo name="wikipédia" src="test"/>
                <Link />
            </QuizHeader>

            <SectionQuiz>
            </SectionQuiz>

            <QuizFooter>
            </QuizFooter>
        </div>
    )
}

export default Quiz
