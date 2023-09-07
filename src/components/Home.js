import './Home.css'
import React,{useState, useEffect} from 'react';

const Home = () => {

     const [bold, setBold] = useState('')

    const Bold = () =>
    {
    //    document.getElementById('article').style.fontWeight="bold";
        setBold(document.getElementById('article').style.fontWeight="bold")
    }

    const Italic = () =>
    {
       document.getElementById("article").style.fontStyle = "italic";
    }

    const Underline = () =>
    {
       document.getElementById("article").style.textDecoration = "underline";
    }

   useEffect(()=>
   {
    
   },[Bold, Italic, Underline])

    return ( 
        <div className='container'>
            <nav>
                <ul>
                    <li><button onClick={
                        ()=>{
                            setBold()
                        }
                    }><b>B</b></button></li>
                    <li><button onClick={Italic}><i>I</i></button></li>
                    <li><button onClick={Underline}><u>U</u></button></li>
                    <li><button ><b>A</b></button></li>
                </ul>
            </nav>
          
            <textarea id='article'></textarea>
          
        </div>
     );
}
 
export default Home;