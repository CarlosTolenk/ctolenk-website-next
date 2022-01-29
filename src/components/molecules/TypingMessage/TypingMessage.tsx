import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingMessage = ({className, message}: any) => {

    return (
        <>
            <ReactTypingEffect
                className={className}
                text={message}
                speed={50}
                eraseSpeed={75}
                eraseDelay={900}
                typingDelay={150}
            />
        </>
    )

}

export default TypingMessage
