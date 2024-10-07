
import React, { useMemo, useState } from "react";
import { financialRecord, useFinancialRecord } from "../../context/financial_record_context"
import { useTable, Column, CellProps, Row } from 'react-table'
import './financial_form.css'

interface EditableCellProps extends CellProps<financialRecord> {
    updateRecord: (rowIndex: number, columnId: string, value: any,) => void;
    editable: boolean;
}

const EditableCell: React.FC<EditableCellProps> = ({ value: intialValue, row, column, updateRecord, editable }) => {
    const [isEditing, setEditing] = useState(false);
    const [value, setValue] = useState(intialValue)

    const onBlur = () => {
        setEditing(false);
        updateRecord(row.index, column.id, value)
    }

    return (
        <div onClick={() => editable && setEditing(true)} style={{ cursor: editable ? "pointer" : 'default' }}>
            {isEditing ? <input value={value} onChange={(e) => setValue(e.target.value)} autoFocus style={{ width: "100%" }} onBlur={onBlur} />
                : typeof value === "string" ? (value) : (value.toString())}
        </div>
    )
}

export const ShowFinancilaList = () => {
    const { records, updateRecord, deleteRecord } = useFinancialRecord();

    const updateCellRecord = (rowIndex: number, columnId: string, value: any) => {
        const id = records[rowIndex]._id.toString(); ////////////////////////////////////////////////////////////////////()
        updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
    }

    const columns: Array<Column<financialRecord>> = useMemo(() => [
        {
            Header: "Description",
            accessor: "description",
            Cell: (props) =>
                (<EditableCell {...props} updateRecord={updateCellRecord} editable={true} />),
        }, {
            Header: "Amount",
            accessor: "amount",
            Cell: (props) =>
                (<EditableCell {...props} updateRecord={updateCellRecord} editable={true} />),
        }, {
            Header: "Category",
            accessor: "category",
            Cell: (props) =>
                (<EditableCell {...props} updateRecord={updateCellRecord} editable={true} />),
        }, {
            Header: "PaymentMethod",
            accessor: "paymentMethod",
            Cell: (props) =>
                (<EditableCell {...props} updateRecord={updateCellRecord} editable={true} />),
        }, {
            Header: "Date",
            accessor: "Date",
            Cell: (props) =>
                (<EditableCell {...props} updateRecord={updateCellRecord} editable={false} />),
        }, {
            Header: "Delete",
            id: "delete",
            Cell: ({ row }) => <button onClick={() => deleteRecord(row.original._id.toString() ?? "")} className="button-85">Delete</button>
        },
    ], [records])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: records })

    return (
        <div className="table-container">
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map((hg) => (
                        <tr {...hg.getHeaderGroupProps()}>
                            {hg.headers.map((column) => (
                                <th {...column.getHeaderProps()}> {column.render("Header")} </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return <tr {...row.getRowProps()}>{row.cells.map((cell) => (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        ))} </tr>

                    })}
                </tbody>
            </table>
        </div>
    )
}