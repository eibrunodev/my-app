import React from 'react';
import {CgClose} from 'react-icons/cg';


import { useHistory } from 'react-router-dom'; 
import {CgInfo} from 'react-icons/cg';


import './style.css'

const Task = ({task ,handleCondition,handleDel}) =>{
  const history = useHistory();

  const handleDetail = () => {
    history.push(`${task.title}`)
  }
    return (
     <div 
       className='task-container'
       style = { task.condition ? {borderLeft: '6px solid chartreuse'} : {}}
      > 
         <div className = 'title-Condition' onClick={()=> handleCondition(task.id) } >
            {task.title}
         </div>
         <div className="del-button"> 
            <button 
              className='button-del-tasks' onClick={()=>handleDel(task.id)}
            >
              <CgClose/>
            </button>

            <button className='button-del-tasks' onClick={handleDetail}>
               <CgInfo />
            </button>

         </div>
        
      </div>
    )
  }

export default Task ;