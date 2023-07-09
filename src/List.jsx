/* eslint-disable react/prop-types */
import React from 'react'

export default function List({list,handleRemove,handleEdit}) {

  return (
    <div>
      {list.map(({id,item})=>
        (<div key={id} className='flex gap-1'>
          <p className='m-1'>{item}</p>
          <button type='button' onClick={()=>handleEdit(id)}>🖊</button>
          <button type='button' onClick={()=>handleRemove(id)}>💥</button>
        </div>)
      )}
    </div>
  )
}
