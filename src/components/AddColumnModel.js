import React from 'react'
import "./AddColumnModel.css"

export const AddColumnModel = ({ newColumnType,newColumnName,setNewColumnName,setNewColumnType,setColumns,setRows,rows,setopenmodel}) => {
    const handleAddColumn = () => {
        if (newColumnName.trim() === "") return;
        setColumns((prevColumns) => [
          ...prevColumns,
          { name: newColumnName, type: newColumnType },
        ]);
        setNewColumnName("");
        setNewColumnType("string");
        let updatedData = rows.map((pre) => ({ ...pre, newColumnName: "" }));
        console.log(updatedData);
        setRows(updatedData);
        console.log("Column added:", newColumnName, newColumnType);
      };
    
  return (
   
        <div className="column-modal">
                        <input
                            type="text"
                            placeholder="Column Name"
                            value={newColumnName}
                            onChange={(e) => setNewColumnName(e.target.value)}
                        />
                        <select
                            value={newColumnType}
                            onChange={(e) => setNewColumnType(e.target.value)}
                        >
                            <option value="string">String</option>
                            <option value="number">Number</option>
                        </select>
                        <button className='add-column-btn' onClick={() => { handleAddColumn(); setopenmodel(false) }}>Add Column</button>

                    </div>
   
  ) 
}
