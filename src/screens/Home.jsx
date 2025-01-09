//import Logo from '../Components/Home/Logo.jsx';
//import Github from '../Components/Home/Github.jsx';
import OpenLink from '../Components/Core/OpenLink.jsx';
import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githublogo from "../assets/img-github.svg";
const Home = () => {
    return (
        <div>
            <div>
                <OpenLink redirectURL="https://vite.dev" LogoImage={viteLogo} />
                <OpenLink redirectURL="https://react.dev" LogoImage={reactLogo} />
                <OpenLink redirectURL="https://github.com/cheloki/desarrollo-frontend-react.git" LogoImage={githublogo} />
            </div>

            <Body />
            <Footer />
        </div>
    );
};

export default Home;