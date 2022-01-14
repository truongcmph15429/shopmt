import foodter from "../components/foodter";
import Header from "../components/herder";

const About ={
    print() {
        return /* html */`
        <header>
        ${Header.print()}
        </header>
        <h1>About Page</h1>
        <footer>
        ${foodter.print()}
        </footer>
    `;
    }
};
export default About;