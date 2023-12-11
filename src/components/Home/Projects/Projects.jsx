import SectionTitle from "../../Shared/Section/SectionTitle";
import { motion } from 'framer-motion';
import { FaEye, FaGithub } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
    const getProjects = async () => {
        const res = await axios.get('/projects.json');
        return res.data;
    }

    const { data: projects, isLoading: projectsLoading } = useQuery({ queryKey: ['projects'], queryFn: getProjects });
    console.log(projects);
    return (
        <div id="projects" className="-scroll-mt-4 min-h-screen bg-white/5">
            <div className="container">
                <SectionTitle title='Project Showcase' subTitle='Explore a concise showcase of impactful projects, blending creativity and technical finesse.' />

                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeIn', type: 'spring' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        { !projectsLoading && projects?.map(
                            project => <div key={project?.title}>
                                <div className="group p-5 backdrop-blur-lg bg-dark/50 space-y-3 rounded-lg outline outline-white/10 outline-1">
                                    <div className="w-full h-[220px] overflow-hidden rounded-md">
                                        <img className="h-full w-full object-cover transition-all group-hover:scale-110" src={project.thumbnail} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-1 flex-wrap">
                                        {
                                            project?.tags?.map(tag => <span className="text-sm px-2 py-1 rounded-sm bg-white/5 text-primary" key={tag}>{tag}</span>)
                                        }
                                    </div>
                                    <div>
                                        <p className="">{project.shortDescription}</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <a rel="noreferrer" target="_blank" href={project?.github?.clientCode}><motion.button whileHover={{ translateY: -3 }} whileTap={{ scale: .93 }} className="flex items-center gap-1 px-4 py-1 rounded-sm border border-primary transition-[background] hover:bg-primary"><FaGithub /> Client</motion.button></a>
                                        <a rel="noreferrer" target="_blank" href={project?.github?.serverCode}><motion.button whileHover={{ translateY: -3 }} whileTap={{ scale: .93 }} className="flex items-center gap-1 px-4 py-1 rounded-sm border border-primary transition-[background] hover:bg-primary"><FaGithub /> Server</motion.button></a>
                                        <a rel="noreferrer" target="_blank" href={project?.liveLink}><motion.button whileHover={{ translateY: -3 }} whileTap={{ scale: .93 }} className="flex items-center gap-1 px-4 py-1 rounded-sm border border-primary transition-[background] hover:bg-primary"><FaEye /> Live</motion.button></a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;