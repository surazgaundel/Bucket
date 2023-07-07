import { useState } from 'react'
import './index.css'
import List from './List';

function App() {
  const [name,setName]=useState('');
  const [list,setList]=useState([]);
  const [isEditing,setIsEditing]=useState(false);
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]=useState({show:false,mdg:'',type:''})

  return (
    <>
    <section className=" border border-1 border-slate-200 flex flex-col items-center">
      <h1>Bucket</h1>
      <form>
        <input type='text' placeholder='Fill the bucket'/>
        <button type='submit'>Add Item</button>
      </form>
      <div>
        <List/>
        <button>Clear Items</button>
      </div>
    </section>
  </>
  )
}

export default App
