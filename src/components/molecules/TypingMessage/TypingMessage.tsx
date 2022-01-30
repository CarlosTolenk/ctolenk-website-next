import React from "react";
import ReactTypingEffect from "react-typing-effect";

// eslint-disable-next-line react/display-name
const TypingMessage = React.memo(({className, message}: any) => {

    return (
        <>
            <ReactTypingEffect
                className={className}
                text={message}
                speed={85}
                eraseSpeed={75}
                eraseDelay={650}
                typingDelay={75}
            />
        </>
    )

})

export default TypingMessage
