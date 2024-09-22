import React from 'react'
import "./DeleteRowModel.css"

const DeleteRowModel = ({setopendelete,rows, setRows, deleteIndex}) => {
    const handledeleteRow = () => {

        const updatedData = rows.filter((row, i) => i !== deleteIndex);
        setRows(updatedData);
    
        setopendelete(false);
      };
    
      
    return (

        <div className="delete-modal">
            <div className='delete-confirm'>Confirm delete</div>
            <div className='delete-sure'>Are you sure you want to delete this row</div>
            <p className='delete-cantdone'>This action cannot be undone</p>
            <div className='del-btn'>
             <button className='delete-row-btn' onClick={() => setopendelete(false)}>No</button>
            <button className='delete-confirm-btn' onClick={() => { handledeleteRow() }}>Yes,Confirm</button>
            </div>
        </div>

    )
}

export default DeleteRowModel