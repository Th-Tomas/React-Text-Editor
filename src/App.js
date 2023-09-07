import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './App.css';


const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{list: 'bullet'},
     {list: 'ordered'}
    ]
  ]
}

function App() {

  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className='row'>
        <div className='editor'>
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
        </div>
       
      </div>
    </div>
  );
}

export default App;
