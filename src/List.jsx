/* eslint-disable react/prop-types */
import React from 'react'

export default function List({list,handleRemove,handleEdit}) {

  return (
    <div>
      {list.map(({id,item})=>
        (<div key={id} className='flex gap-5 justify-between items-center bg-slate-700 m-1 p-1 rounded-sm'>
          <p className='m-1'>{item}</p>
          <section>
          <button type='button' onClick={()=>handleEdit(id)}>🖊</button>
          <button type='button' onClick={()=>handleRemove(id)}>💥</button>
          </section>
        </div>)
      )}
    </div>
  )
}
