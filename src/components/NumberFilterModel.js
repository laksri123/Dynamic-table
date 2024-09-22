import React from 'react'

export const NumberFilterModel = ({ numoption,  setnumoption, setfilterData, rows, setRows, columns, data, filterIndex, filterdata, setnumfilter }) => {
    const handleprevious = () => {
        setRows(data);
    }
    const filternumrows = () => {
        // console.log(filte);
        console.log(filterIndex);
        let name = columns[filterIndex].name.toLowerCase();
        console.log(name);
        let updatedData = rows;
        console.log(numoption)
        if (numoption === "greater") {
            console.log("INNN")
            updatedData = rows.filter((row) =>
                row[name] >= filterdata
            )
            console.log(updatedData)

        }
        else if (numoption === "less") {
            updatedData = rows.filter((row) =>
                row[name] <= filterdata
            )
            console.log(updatedData)
        }
        setRows(updatedData);
        setnumfilter(false);
    }

    return (

        <div className="modal1">
            <h1>NUM Filter</h1>

            <h2>CONTAINS num</h2>
            <select defaultValue={"greater"} onChange={(e) => { setnumoption(e.target.value); console.log(e.target.value) }}>
                <option
                    value="greater"
                >Greater than</option>
                <option
                    value="less"
                >Less than</option>
            </select>
            <input
                type="number"
                placeholder="Add entries and press enter"
                name="contain"
                onChange={(e) => setfilterData(e.target.value)}

            />
            <button onClick={() => handleprevious()}>Reset ALL</button>
            <button onClick={() => filternumrows()}>Apply</button>
        </div>

    )
}
