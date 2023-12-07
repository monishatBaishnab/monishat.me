import PropTypes from 'prop-types';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center space-y-5 mb-10" data-aos='zoom-in' data-aos-duration="1000">
            <h2 className="font-normal text-primary inline-block relative after:absolute after:left-0 after:right-0 after:w-32 after:mx-auto after:-bottom-3 after:h-1 after:bg-white after:rounded-full">{title}</h2>
            {subTitle && <p className="max-w-3xl mx-auto">{subTitle}</p>}
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default SectionTitle;