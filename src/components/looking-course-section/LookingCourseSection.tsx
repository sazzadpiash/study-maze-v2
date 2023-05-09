import SearchCourseCard from "./SearchCourseCard";

const LookingCourseSection = () => {

    const coursesData = [
        {
            _id: "course001",
            image: "https://studyportals.com/wp-content/uploads/2015/06/BP_Mobile.png",
            title: "Bachelor's programmes",
            body: "Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.",
            btnContent: "Search Bachelors"
        },
        {
            _id: "course002",
            image: "https://studyportals.com/wp-content/uploads/2015/06/MP_Mobile.png",
            title: "Master's programmes",
            body: "Find and compare more than 75,000 Master’s degrees from top universities worldwide.",
            btnContent: "Search Masters"
        },
        {
            _id: "course003",
            image: "https://studyportals.com/wp-content/uploads/2015/06/PhD_Mobile.png",
            title: "PhD & Doctorate studies",
            body: "PhD, professional doctorates and other Doctoral degrees at graduate schools, universities and research institutes.",
            btnContent: "Search PhD"
        }
    ]

    return (
        <section className="py-8 md:py-12">
            <div className="py-4 md:py-6">
                <h1 className="text-2xl md:text-5xl text-center font-semibold">What course are you looking for?</h1>
            </div>
            <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 md:mx-6">
                {
                    coursesData.map(data => {
                        return <SearchCourseCard
                            key={data?._id}
                            data={data}>
                        </SearchCourseCard>
                    })
                }
            </div>
        </section>
    );
};

export default LookingCourseSection;