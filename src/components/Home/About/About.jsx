import aboutImg from '../../../assets/about-img.jpg'
import SectionTitle from '../../Shared/Section/SectionTitle';

const About = () => {
    return (
        <div id="about" className="min-h-screen -scroll-mt-4 bg-white/5">
            <div className="container space-y-10">
                <SectionTitle
                    title='About Me'
                    subTitle='Energetic and eager to contribute, join me in my coding corner as I navigate React, shaping web experiences and connecting with the vibrant MERN community.'
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 items-center overflow-hidden">
                    <div className="col-span-1 border-2" data-aos='fade-right' data-aos-duration="1000">
                        <img src={aboutImg} alt="about-img" />
                    </div>
                    <div className="col-span-2 space-y-4 order-first md:order-last" data-aos='fade-left' data-aos-duration="1000">
                        <h4 className="font-normal">Hi There 👋</h4>
                        <p>{`Welcome to my Coding Corner! I'm an enthusiastic and energetic MERN (MongoDB, Express.js, React, Node.js) developer hailing from the vibrant tech scene of Bangladesh. As a budding talent in the MERN stack, my journey is fueled by passion and self-motivation, ready to immerse myself in the dynamic world of web development.`}</p>
                        <p>{`🚀 Embracing the MERN stack's power, I am currently honing my skills in React for crafting engaging user interfaces and leveraging Node.js/Express.js for robust server-side scripting. My hands-on experiences and exploration of real-world projects serve as stepping stones, propelling me forward and keeping me aligned with the latest industry trends.`}</p>
                        <p>{`🌱 Currently, I am expanding my expertise in React Query and Next.js, pushing the boundaries to enhance the performance of progressive web applications for a seamless user experience.`}</p>
                        <p>{`🔍 Actively on the lookout for opportunities to apply my skills in collaborative and fast-paced environments, I am keen to contribute to impactful projects that challenge and elevate my capabilities.`}</p>
                        <p>{`💡 My excitement lies in building scalable web applications, and I'm open to connecting with fellow developers, mentors, and MERN enthusiasts. If you're passionate about the MERN stack or simply want to exchange ideas, advice, or collaborate on projects, feel free to reach out!`}</p>
                        <p>{`💻 Eager to engage and contribute to the vibrant MERN community, I am open for advice, collaborative projects, or friendly chats about MERN stack development. Let's connect and build something amazing together!`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;