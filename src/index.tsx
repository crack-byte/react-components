import React,{CSSProperties, useState} from 'react'
import styles from './styles.module.css'
const chatCss:CSSProperties=
{
  borderColor:'black',
  borderWidth:'4px',
  borderStyle: 'solid',
  padding: '4px',
  maxWidth: '500px',
  minHeight: '400px',
  maxHeight: '400px',
  overflowY: 'scroll',
};
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
interface ChatBoxProp{
  messageList:MessageProp[];
}
interface MessageProp {
  name: string;
  text: string;
}

export const ChatBox = ({messageList}:ChatBoxProp) => {
  const [messages, setMessages] = useState(messageList);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = (e: any) => {
      e.preventDefault();
      if (inputText.trim() !== '') {
          setMessages([...messages, {text:inputText,name:'Leo'}]);
          setInputText('');
      }
  };

  return (
      <div>
          <div style={chatCss}>
              <div className="messages">
                  {messages.map((message, index) => (
                      <div key={index}>{message.name}:{message.text}</div>
                  ))}
              </div>

          </div>
          <form onSubmit={handleMessageSubmit}>
              <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
              />
              <button type="submit">Send</button>
          </form>
      </div>
  );
};

