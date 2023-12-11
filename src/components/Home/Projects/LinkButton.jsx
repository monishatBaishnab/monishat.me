import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion';

const LinkButton = ({link, Icon}) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}><motion.button whileHover={{ translateY: -3 }} whileTap={{ scale: .93 }} className="flex items-center gap-1 px-4 py-1 rounded-sm border border-primary transition-[background] hover:bg-primary"><FaGithub /> Client</motion.button></a>
    );
};

export default LinkButton;