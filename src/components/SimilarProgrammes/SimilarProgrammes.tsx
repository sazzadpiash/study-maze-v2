import ProgrammeCard from "./ProgrammeCard";

const SimilarProgrammes = () => {
    return (
        <div className="p-20 bg-[#EDF3F6]">
            <h1 className="text-4xl font-bold text-secondary mb-10">Other interesting programmes for you</h1>
            <div className="programmes-container grid grid-cols-4 gap-5 mb-16">
                <ProgrammeCard></ProgrammeCard>
            </div>
            <div className="flex justify-center">
                <button className="py-2 px-4 font-semibold rounded bg-[#05293C] border-2 border-[#05293C] text-white hover:bg-[#05293cda] transition">See other suggestions</button>
            </div>
        </div>
    );
};

export default SimilarProgrammes;