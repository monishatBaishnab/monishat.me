import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SkillsContainer = ({ skills, title }) => {
    return (
        <div>
            <h4 className="mb-5 text-center font-medium">{title}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                {
                    skills?.map(skill =>
                        <div key={skill?.id} data-aos="flip-right" data-aos-duration="2000">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} className="text-center bg-white/5 rounded-md border border-white/10 space-y-3 p-5">
                                <div className="w-full h-[60px] overflow-hidden">
                                    <img className="w-full h-full object-contain" src={skill.image} alt="" />
                                </div>
                                <h6 className="font-normal text-base">{skill.label}</h6>
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

SkillsContainer.propTypes = {
    skills: PropTypes.array,
    title: PropTypes.string,
}

export default SkillsContainer;