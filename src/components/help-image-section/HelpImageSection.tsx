import { useState } from "react";
import HelpCard from "./HelpCard";


const HelpImageSection = () => {

    const cardsData = [
        {
            _id: "help001",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/12/Platform.webp",
            title: "Find Programs Faster"
        },
        {
            _id: "help002",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/12/Support.webp",
            title: "Helpful and Dedicated Support Team"
        },
        {
            _id: "help003",
            image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/12/Studen-Loan.webp",
            title: "Access to Exclusive Scholarships"
        }
    ]

    const [isStudent, setIsStudent] = useState(true);
    const [isRecrement, setIsRecrement] = useState(false);

    const activeButton = "bg-[#f95c39] hover:bg-[#f95c39] text-white";
    const deactivateButton = "text-black hover:bg-[#f95c39]"

    const studentHandler = () => {
        setIsStudent(true)
        setIsRecrement(false)
    }

    const recruitmentHandler = () => {
        setIsRecrement(true)
        setIsStudent(false)
    }

    return (
        <section className="py-10 md:py-16">
            <div className="mx-4 md:mx-8">
                <h3 className="text-2xl md:text-5xl font-semibold text-center">We Help Students Get Admitted Into the Best International Educational Institutions</h3>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full md:w-1/3 mx-2 md:mx-0 text-center my-8 md:my-12 flex justify-center bg-[#f7bdb0] rounded-full">
                    <button onClick={studentHandler} className={`w-full py-2 rounded-full font-medium ${isStudent ? activeButton : deactivateButton}`}>
                        STUDENTS
                    </button>
                    <button onClick={recruitmentHandler} className={`w-full py-2 rounded-full font-medium ${isRecrement ? activeButton : deactivateButton}`}>
                        RECRUITMENT PARTNERS
                    </button>
                </div>
            </div>
            <div className="mx-auto py-6 md:py-8">
                <center>
                    <img src="/assets/images/help-image-section/help-image-section.gif" className="w-full md:w-2/3 h-auto" alt="" />
                </center>
            </div>

            <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 md:mx-6">
                {
                    cardsData.map(data => {
                        return <HelpCard
                            key={data._id}
                            data={data}>
                        </HelpCard>
                    })
                }
            </div>

            <div className="text-center py-6 md:py-10">
                <button className=" py-2 md:py-3 px-4 md:px-6 text-lg text-white font-medium rounded-sm capitalize bg-[#f95c39]">
                    Try It Today
                </button>
            </div>



        </section>
    );
};

export default HelpImageSection;