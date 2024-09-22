import React, { useState, useEffect } from 'react';
import { EditCellModel } from './EditCellModel';
import { TextFilterModel } from './TextFilterModel';
import { NumberFilterModel } from './NumberFilterModel';
import { AddColumnModel } from './AddColumnModel';
import DeleteRowModel from './DeleteRowModel';
import { FaFilter } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import './Table.css'
const storedata =() =>{
    let list = localStorage.getItem("rows");
    if(list){
        return JSON.parse(localStorage.getItem("rows"))
    }
    else{
        return [];
    }

} 
export const Table = () => {
    const [columns, setColumns] = useState([
        { name: "NAME", type: "string" },
        { name: "LINK", type: "string" },
        { name: "INGREDIENTS", type: "string" },
        { name: "PRICE", type: "number" },
    ]);

    // const initialData = [
    //     { name: 'John', link: "https://goggle.com", ingredients: "Lipstic", price: 25 },
    //     { name: 'Rahul', link: "https://goggle.com", ingredients: "Lipbam", price: 55 },
    //     { name: 'Lakshya', link: "https://goggle.com", ingredients: "Choochi-product", price: 56 },
    // ];
    const [rows, setRows] = useState(storedata());
    const [filterdata, setfilterData] = useState({ contain: "", notContain: "" });
    const [newColumnName, setNewColumnName] = useState("");
    const [newColumnType, setNewColumnType] = useState("string");
    const [filter, setFilter] = useState({ key: "", value: "" });
    const [model, setopenmodel] = useState(false);
    const [opendelete, setopendelete] = useState(false);
    const [openfilter, setopenfilter] = useState(false);
    const [filterIndex, setFilterIndex] = useState(0);
    const [deleteIndex, setDeleteIndex] = useState(0);
    const [data, setdata] = useState(storedata());
    const [opencell, setopencell] = useState(false);
    const [editindex, seteditindex] = useState({ row: 0, col: 0 });
    const [containdata, setcontaindata] = useState("");
    const [numfilter, setnumfilter] = useState(false);
    const [filternum, setfilternum] = useState(0);
    const [numoption, setnumoption] = useState("greater");
 
   
     
      useEffect(() => {
        if (rows.length > 0) {
          localStorage.setItem('rows', JSON.stringify(rows));
          console.log("fff")
        }
        
      }, [rows]);
      
    const handleAddRow = () => {
        const keys = Object.keys(rows[0]);
        const newObj = keys.reduce((obj, key) => {
            obj[key] = '';
            return obj;
        }, {});
        setRows((prevRows) => [...prevRows, newObj]);
        setdata((prevRows) => [...prevRows, newObj]);
    };
    return (
        <>
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className='table-heading'>Skincare Catalog</div>
                    <div className='table-btn-container'>
                        <button className='add-row-btn' onClick={handleAddRow}>Add Rows</button>
                        <button className='add-clm-btn' onClick={() => setopenmodel(true)}>Add Column</button>
                    </div>

                </div>



                <div className="table">
                    <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>

                        {
                            columns?.map((col, i) =>
                                <div key={i} className='table-head'>
                                    {
                                        col.name
                                    }
                                    <FaFilter className='filter-icon' onClick={() => {
                                        (col.type === "string" ? setopenfilter(true) : setnumfilter(true)); setFilterIndex(i)
                                    }} />

                                </div>
                            )
                        }
                        <div className='table-head'>

                            Delete
                        </div>

                    </div>
                    <div className="tableBody">
                        {rows.length === 0 ? <h2>No Data Found!!</h2> :
                            rows?.map((r, i) =>
                                <div key={i} className='table-row'>
                                    {
                                        Object.entries(r)?.map(([key, value], index) => (
                                            <div key={index} className='table-cell' onClick={() => { seteditindex({ row: i, col: index }); setopencell(true) }}>{value}</div>
                                        ))
                                    }
                                    <span className="table-cell delete-btn" onClick={() => { setopendelete(true); setDeleteIndex(i) }}><MdDelete />
                                    </span>
                                </div>
                            )
                        }
                    </div>
                </div>
                {opencell && <EditCellModel setcontaindata={setcontaindata} setRows={setRows} rows={rows} columns={columns} editindex={editindex} containdata={containdata} setopencell={setopencell} data = {data}
                />}
                {openfilter && <TextFilterModel setfilterData={setfilterData} setRows={setRows} setopenfilter={setopenfilter} rows={rows} filterdata={filterdata} filterIndex={filterIndex} data={data}
                    columns={columns} />}

                {
                    numfilter && <NumberFilterModel setnumoption={setnumoption} setfilterData={setfilterData}
                        rows={rows} columns={columns} setRows={setRows} data={data} filterIndex={filterIndex}
                        numoption={numoption} filterdata={filterdata} setnumfilter={setnumfilter} />}

                {model && <AddColumnModel setNewColumnName={setNewColumnName} setNewColumnType={setNewColumnType} setopenmodel={setopenmodel} setColumns={setColumns} setRows={setRows} rows={rows} newColumnName={newColumnName} newColumnType={newColumnType} />}

                {
                    opendelete && <DeleteRowModel setopendelete={setopendelete} setRows={setRows} rows={rows} deleteIndex={deleteIndex} />}

            </div>
            <div className='table-row-add' onClick={handleAddRow}><FaPlus size={25} /></div>
        </>
    )
}
