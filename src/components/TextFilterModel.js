import React from 'react';
import './TextFilterModel.css';

export const TextFilterModel = ({ setfilterData, setRows, rows, filterdata, filterIndex, setopenfilter, data, columns }) => {
  function editDataHandler(e) {
    setfilterData((pre) => { return { ...pre, [e.target.name]: e.target.value } })
  }
  const handleprevious = () => {
    setRows(data);
    setopenfilter(false);
  }
  const filteredRows = () => {
    if (filterdata.contain === "" && filterdata.notContain === "") {
      setopenfilter(false);
      return
    }
    filterdata.contain = filterdata.contain.trim();
    filterdata.notContain = filterdata.notContain.trim();

    let { name } = columns[filterIndex];

    let n = name.toLowerCase();

    let updatedData = rows.filter((row) => {
      if (filterdata.contain !== "" && row[n].toLowerCase().includes(filterdata.contain.toLowerCase()))
        return row;
      else if (filterdata.notContain !== "" && !row[n].toLowerCase().includes(filterdata.notContain.toLowerCase()))
        return row;

    }
    )
    setRows(updatedData);
    setopenfilter(false);

  }
  return (
    <>
      <div className="textModel">
        <div className='textModel-head'>Text Filter</div>

        <div className='textModel-subhead'>CONTAINS LIST</div>
        <input
          type="text"
          placeholder="Add entries and press enter"
          name="contain"
          onChange={(e) => editDataHandler(e)}

        />
        <div >DOES NOT CONTAIN LIST</div>
        <input
          type="text"
          placeholder="Add entries and press enter to add"
          name="notContain"
          onChange={(e) => editDataHandler(e)}
        />

        <div className='hr'></div>

        <div className='textModel-btn-container'>
          <button className='textModel-btn' onClick={() => handleprevious()}>Reset ALL</button>
          <button className='textModel-btn apply-btn' onClick={() => filteredRows()}>Apply</button>
        </div>
      </div>
    </>
  )
}
