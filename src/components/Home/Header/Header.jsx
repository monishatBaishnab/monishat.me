import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';
import monishat from '../../../assets/moni.png';
import { IoMdCodeDownload } from "react-icons/io";

const Header = () => {
    return (
        <div id="home" className="min-h-screen relative flex items-center pt-[67px] -mt-[67px] ">
            <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 items-center">
                <div className="space-y-5" data-aos='fade-up' data-aos-duration="1000">
                    <h4 className="font-normal text-slate-400">Welcome to my coding corner!</h4>
                    <h2>{`Hello 👋, I'm Monishat Baishnab`}</h2>
                    <h4 className="flex items-center gap-2">
                        A seasoned
                        <TypeAnimation
                            sequence={[
                                1000,
                                'Full Stack Developer',
                                1000,
                                'Frontend Developer',
                                1000
                            ]}
                            wrapper="span"
                            className="text-primary"
                            cursor={true}
                            repeat={Infinity}
                            preRenderFirstString
                            speed={1}
                        />
                    </h4>
                    <div className="flex items-center gap-5">
                        <motion.button
                            whileHover={{ translateY: -5 }}
                            whileTap={{ scale: .9 }}
                            className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] border-primary hover:bg-primary transition-bg hover:text-white">
                            Resume
                            <IoMdCodeDownload className="text-2xl" />
                        </motion.button>
                    </div>
                </div>
                <div className="h-[400px] overflow-hidden w-full flex justify-center pb-5" data-aos='fade-down' data-aos-duration="1000">
                    <motion.div
                        animate={{
                            y: [0, 10, 0]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        className="h-full w-[320px] border-2 pt-5 bg-white/10">
                        <img className="h-full w-full object-contain" src={monishat} alt="Monishat" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Header;