

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-8/12 md:w-4/12 text-center mx-auto mt-8 md:mt-16">
            <p className="text-orange-500 pb-2 italic font-semibold text-2xl">--- {subHeading} ---</p>
            <h3 className="text-2xl md:text-4xl font-semibold uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;