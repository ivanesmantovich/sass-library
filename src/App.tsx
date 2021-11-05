import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './components/Card';
import Library from './components/Library';
import Example from './components/Example';

function App() {

    const [example, setExample] = useState<boolean>(false);

	return (
		<div className="App">
            <div className='row justify-center'>
                <div onClick={() => setExample(!example)} className="btn-outlined-purple">Change Tab</div>
            </div>
            {example == false ? <Library/> : <Example/>}
            
			
		</div>
	);
}

export default App;
