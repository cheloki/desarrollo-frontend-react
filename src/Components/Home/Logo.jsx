import viteLogo from "../../assets/vite.svg";
import reactLogo from "../../assets/react.svg";
import github from "../../assets/github.svg";
const Logo =() => {
    return (
      
                <div>
                            <a href="https://vite.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo" />
                            </a>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                            <br />
                            <a href="https://github.com/cheloki/desarrollo-frontend-react.git" target="_blank">
                                <img src={github} className="logo react" alt="React logo" />
                            </a>
                </div>
        
    );
};

export default Logo;
