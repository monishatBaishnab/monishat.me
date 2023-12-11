import About from "../components/Home/About/About";
import Header from "../components/Home/Header/Header";
import Projects from "../components/Home/Projects/Projects";
import Skills from "../components/Home/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;