import './Workoutplan.css'
import { useState } from 'react'


export function Workoutplan() {

   const [text,setText] =useState('');
   const [addList,setAddList]=useState([]);


const HandleAddList=()=>{
    const ListId={
        id: addList.length===0?1:addList[addList.length -1].id +1,
        name: text
    }
    setAddList([...addList,ListId])
}

const Delete=(value)=>{
    setAddList(addList.filter((plan)=>{
        if (value===plan.id){
            return false
        }else{
            return true
        }
    }))
}



        return (
            <div>
                <input type='text' onChange={(event) => { setText(event.target.value) }} />
                <button onClick={HandleAddList}>Submit</button>
                {addList.map((value) => {
                    return <div><div className='listname'>{value.name}</div> <button className='buttonname'onClick={() => Delete(value.id)}>X</button></div>
                })}

            </div>
        )
    }