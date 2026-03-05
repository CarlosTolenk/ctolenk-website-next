import { memo } from 'react'
import dynamic from 'next/dynamic'

const ReactTypingEffect = dynamic(() => import('react-typing-effect'), {
  ssr: false,
})

const TypingMessage = ({ className, message }: any) => {
  return (
    <ReactTypingEffect
      className={className}
      text={message}
      speed={95}
      eraseSpeed={75}
      eraseDelay={650}
      typingDelay={75}
    />
  )
}

export default memo(TypingMessage)
