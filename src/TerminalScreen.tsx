import React, { useState, useEffect, useRef, ReactElement } from 'react';
import { executeCommand } from './utils/execute';

export function TerminalScreen({text, delay}: { text: string, delay: number }) {
  const [currentCommand, setCurrentCommand] = useState('');
  const [lastCommand, setLastCommand] = useState('');
  const [output, setOutput] = useState<string | ReactElement>('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentCommand(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false); 
        setLastCommand(text);
        setOutput(executeCommand(text));
        setCurrentCommand('')
        if (textareaRef.current) {
          console.log(textareaRef)
          textareaRef.current.focus()
        }
      }, delay);
  
      return () => clearTimeout(timeout);

    }
  }, [currentIndex, delay, text]);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedCommand = currentCommand.trim();
      const output = executeCommand(trimmedCommand);
      setOutput(output);
      console.log(trimmedCommand)
      setLastCommand(trimmedCommand);
      setCurrentCommand('');
      
    }
  };

  
    



  return (
    <>
      {output && (
        <div className="command-output">
          <div className="command-header">
            <span className="prompt">&gt;</span>
            <span className="text nowrap">clear && </span>
            <span className="text nowrap">{lastCommand}</span>
          </div>
          <pre className="text">{output}</pre>
        </div>
      )}

      <div className="command-output">
        <div className="command-header">
          <span className="prompt">&gt;</span>
          <span className="text nowrap">
            clear &&
          </span>
          <textarea
            maxLength={30}
            ref={textareaRef}
            className="textarea-field text"
            onKeyDown={handleKeyDown}
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            readOnly={isTyping}
          />
        </div>  
      </div>
    </>
  );
}
