import SectionTitle from "../../Shared/Section/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import { comfortableSkills, mainSkills, tools } from "./skils";

const Skills = () => {
    return (
        <div id="skills" className="-scroll-mt-4 min-h-screen">
            <div className="container">
                <SectionTitle
                    title='Skills at a Glance'
                    subTitle='Crafting seamless designs with HTML, CSS, and React. Proficient in backend technologies—Node.js, Express.js, MongoDB, and more—for a comprehensive web development repertoire.'
                />
                <div className="space-y-5 md:space-y-10">
                    <SkillsContainer title='Key Proficiencies' skills={mainSkills} />
                    <SkillsContainer title='Comfortable With' skills={comfortableSkills} />
                    <SkillsContainer title='Tools Mastery' skills={tools} />
                </div>
            </div>
        </div>
    );
};

export default Skills;