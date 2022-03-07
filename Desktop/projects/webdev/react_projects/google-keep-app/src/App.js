import './app.css';
import Header from './Header';
import Addnote from './Addnote';
import Notelist from './Notelist';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [notelist,setNotelist] = useState([])

  const addingNote = (noteitem) =>{
    setNotelist((preval)=>{
      return [...preval,noteitem]
    })
  }
  const deletingNote = (id) => {
    setNotelist((prevalue)=>{
      return prevalue.filter((item,index)=>index!=id)
    })
  }
  return (
    <>
    <Header/>
    <Addnote addanote={addingNote} />
    <Notelist noteList={notelist} letsdeletenote={deletingNote} />
    <Footer />
    </>
  );
}

export default App;
