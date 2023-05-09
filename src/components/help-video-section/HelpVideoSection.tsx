

const HelpVideoSection = () => {
    return (
        <section className="bg-[#f1f5fa] py-10 md:py-16">
            <div className="mb-6 md:mb-10">
                <h1 className="text-2xl md:text-5xl text-center font-bold">How We Help</h1>
            </div>
            <div>
                {/* <center>
                    <video preload="none" crossOrigin="anonymous" playsInline tabIndex={0} poster="assets/images/help-image-section/poster/help-video-poster.gif" className="w-full md:w-1/2 mx-2 md:mx-0 rounded-md" controls>
                        <source src="https://vimeo.com/822600148" />
                    </video>
                </center> */}

                <center>
                    <iframe className="rounded-md" width="560" height="315" src="https://www.youtube.com/embed/cwOxya1diQA?autoplay=1&mute=1" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </center>
            </div>
            <div className="my-4 md:my-8 text-center">
                <button className=" py-2 md:py-3 px-4 md:px-6 text-lg text-white font-medium rounded-sm capitalize bg-[#f95c39]">
                    Partner With Us
                </button>
            </div>
        </section>
    );
};

export default HelpVideoSection;