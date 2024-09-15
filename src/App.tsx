import { Helmet } from 'react-helmet';
import './App.css'
import { TerminalScreen } from './TerminalScreen';

export function App() {
                
  return (
    <> 
      <Helmet>
        <title>My portfolio</title>
      </Helmet>
      
      <div className='main-container'>
        
        <div className='scanlines'></div> 
          <div className='header'><h1 className='text'>JAKUB FORMANEK</h1></div>
          <TerminalScreen text={"help"} delay={500}/>
      </div>
      
        
      

      
    </>
  );
}


