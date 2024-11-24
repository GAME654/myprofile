import About from "../About";
import Experience from "../Experience";

const RightSection = () => {
    return(
        <div className="px-5 grid gap-y-40">
            <About />
            <Experience />
            <div className='mb-96'>EXP</div>
            <div className='mb-96'>EXP</div>
        </div>
    )
}
export default RightSection;