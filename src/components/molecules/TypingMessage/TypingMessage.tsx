import { memo } from 'react'
import ReactTypingEffect from 'react-typing-effect'

const TypingMessage = ({ className, message }: any) => {
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
}

export default memo(TypingMessage)
