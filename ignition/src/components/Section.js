import { useState } from "react";

const Section = ({ title, isVisible,setIsVisible ,hide}) => {
    // const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {!isVisible && (
                <button
                    onClick={() => setIsVisible()}
                    className="underline text-gray-600"
                >
                    Show
                </button>
            )}

            {isVisible && (
                <>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32.
                    </p>
                    <button
                        onClick={() => hide()}
                        className="underline text-gray-600"
                    >
                        Hide
                    </button>
                </>
            )}
        </div>
    );
};

export default Section;
