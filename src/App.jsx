import { useEffect, useState } from 'react'
import './index.css'
import List from './List';
import Alert from './Alert';

const getLocalStorage=()=>{
 let list=localStorage.getItem('list');
 if(list){
   return (JSON.parse(localStorage.getItem('list')))
 }else{
  return [];
 }
}

function App() {
  const [name,setName]=useState('');
  const [list,setList]=useState(getLocalStorage());
  const [isEditing,setIsEditing]=useState(false);
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]=useState({show:false,msg:'',type:''})

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])


  const handleChange=(e)=>{
    setName(e.target.value);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name){
      showAlert(true,'Please add items','danger');
    }else if(name && isEditing){
      setList(list.map(item=>item.id===editId?{...item,item:name}:item));
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true,'Item Edited','success');
    }
    else{const newItem={id:new Date().getTime().toString(),item:name}
    showAlert(true,'Item Added','success');
    setList([...list,newItem]);
    setName('')}
  }
  
  const handleClear=()=>{
    showAlert(true,'Items Cleared','danger');
    setList([]) 
  }
  
  const handleEdit=(id)=>{
    const item=list.find(item=>item.id===id);
    setName(item.item);
    setEditId(id);
    setIsEditing(true);
  }
  
  const handleRemove=(id)=>{
    setList(list.filter(item=>item.id!==id))
    showAlert(true,'Item Removed','danger')
  }

  const showAlert=(show=false,msg='',type='')=>{
    setAlert({show,msg,type});
  }

  return (
    <>
    <section className=" border border-slate-600 rounded-xl w-1/2 m-auto flex flex-col items-center mt-5">
      <h1 className='text-3xl'>Bucket</h1>
      {alert.show&& <Alert {...alert} removeAlert={showAlert} list={list} handleEdit={handleEdit}/>}
      <form onSubmit={handleSubmit} className="flex mt-3 mb-3 ">
        <input type='text' placeholder='Fill the bucket' value={name} onChange={handleChange} className='p-2 rounded-l-lg' />
        <button type='submit' className='text-green-300 rounded-r-lg bg-slate-800'>{isEditing?'Edit':'Add'} Item</button>
      </form>
      {list.length>0 && (<div className='m-4'>
        <List list={list} handleRemove={handleRemove} handleEdit={handleEdit}/>
        <button type='button' onClick={handleClear} className="mt-2 text-red-500 rounded-lg w-full bg-slate-800">Clear Items</button>
      </div>)}
    </section>
  </>
  )
}

export default App;
 