import logo from "../assets/mylogo3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">   
            <img className="mx-4 w-20" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">

            <a href="https://github.com/Tarunyadavvvvv" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tarunyadavvvvv " target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a  href="#contact">
                <FaPhone />
            </a>

        </div>
    </nav>
};

export default Navbar;


//m-8 = margin: 2rem         1rem = 4
