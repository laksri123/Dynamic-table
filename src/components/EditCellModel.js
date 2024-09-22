import React from 'react';
import './EditCellModel.css';


export const EditCellModel = ({ setcontaindata, setRows, rows, columns,editindex, containdata,setopencell,data }) => {
     const editcellHandler = () => {
        // console.log(containdata);
        // console.log(editindex)
        
        let { type, name } = columns[editindex.col];
        name = name.toLowerCase();
        console.log(name);
    
        let updatedData = rows.map((row, index) => {
            if (index === editindex.row) {
                row[name] = containdata;
            }
            return row;
        })
        console.log(updatedData)
        setRows(updatedData);
        setopencell(false);
        setopencell(false);

    
        // if (type == "string") {
    
        // }
    }
    const handleprevious = () => {
        setRows(data);
        setopencell(false);
      }
    return (

        <div className="edit-modal">
            <input
                type="text"
                placeholder="Add values and press save"
                onChange={(e) => setcontaindata(e.target.value)}


            />
            <div className='edit-modal-btn-container'>
            <button className='edit-modal-btn' onClick={()=>handleprevious()}>Reset All</button>
            <button className='edit-modal-save-btn' onClick={() => editcellHandler()}>Save</button>
            </div>
        </div>


    )
}
