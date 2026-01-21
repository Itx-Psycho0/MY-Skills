import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
    return <h1>Hello World</h1>
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

// strict mode nothing it just render the code twice for checking out tha bug and also identify any outed parts of react api in the code.

// React before 18
// React.render(<App/>)
