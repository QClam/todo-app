import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import detelete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isCompleted, deleteTask, toggleTask}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => toggleTask(id)} className='flex flex-1 items-center cursor-pointer'>
                <img src={isCompleted ? tick : not_tick} alt="tick-icon" className='w-7'/>
                <p className={ `text-slate-700 ml-4 text-[17px] ${isCompleted ? "line-through" : ""} decoration-slate-500`}>{text}</p>
            </div>
            <img onClick={() => deleteTask(id)} src={detelete_icon} alt="delete-icon" className='w-5 cursor-pointer'/>
        </div>
    )
}

export default TodoItems