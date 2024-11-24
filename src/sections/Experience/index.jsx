import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/NO1.png"
import { useState } from "react";

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    return (
        <div className="">
        <div className="text-primaryAccent font-medium"> Experience</div>
            <div 
                className={`grid grid-cols-[25%_75%] px-2 py-5 rounded-md transition-all ${isMouseEnter['exp1'] ?"bg-gray-200 ":""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1' : true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1' : false })}
                >
                <div>
                    <div>
                        <span className={`Text-sm ${isMouseEnter['exp1'] ?"text-primaryAccent":""}`}>2023-Present</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp1'] ?"text-primaryTitle":""}`}>Practice writing</div>
                    <div className="flex gap-4 text-xl">
                        <a href="https://github.com/GAME654" target="_blank" className="hover:scale-125 hover:text-primaryTitle transition-all"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://github.com/GAME654" target="_blank" className="hover:scale-125 hover:text-primaryTitle transition-all"><FontAwesomeIcon icon={faMedium}/></a>
                    </div>
                    <div className="text-sm">desciption</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp1'] ?"text-primaryTitle":""} `}>React</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp1'] ?"text-primaryTitle":""} `}>Tailwind</div>
                    </div>
                </div>
            </div>



            <div 
                className={`grid grid-cols-[25%_75%] px-2 py-5 rounded-md transition-all ${isMouseEnter['exp2'] ?"bg-gray-200 ":""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp2' : true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2' : false })}
                >
                <div>
                    <div>
                        <span className={`Text-sm ${isMouseEnter['exp2'] ?"text-primaryAccent":""}`}>2023-Present</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp2'] ?"text-primaryTitle":""}`}>Practice writing</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub}/>
                        <FontAwesomeIcon icon={faMedium}/>
                    </div>
                    <div className="text-sm">desciption</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2'] ?"text-primaryTitle":""} `}>React</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2'] ?"text-primaryTitle":""} `}>Tailwind</div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
export default Experience;