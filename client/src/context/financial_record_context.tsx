import { useUser } from '@clerk/clerk-react';
import React, { createContext, useContext, useEffect, useState } from 'react'



export interface financialRecord {
    _id: String
    userId: String;
    description: String;
    amount: Number;
    category: String;
    paymentMethod: String;
    Date: Date
}
interface financialRecordContextType {
    records: financialRecord[];
    addRecord: (record: financialRecord) => void;
    updateRecord: (id: string, newRecord: financialRecord) => void;
    deleteRecord: (id: string) => void;
}


export const financialRecordContext = createContext<financialRecordContextType | undefined>(undefined)

export const FinancialRecordsProvider = ({ children }: { children: React.ReactNode }) => {

    const [records, setRecords] = useState<financialRecord[]>([]);
    const { user } = useUser();

    const fetchUser = async () => {
        if (!user) return;
        const response = await fetch(`http://localhost:3004/financial-record/getUser/${user?.id}`, {
            method: "GET"
        })

        if (response.ok) {
            const userRecord = await response.json();
            console.log(userRecord)
            setRecords(userRecord)
        } else {
            console.log("no user found")
        }
    }

    useEffect(() => {
        fetchUser();
    }, [user])

    const addRecord = async (record: financialRecord) => {
        const response = await fetch("http://localhost:3004/financial-record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(record)
        })
        try {
            if (response.ok) {
                const newRecord = await response.json()
                setRecords((prev) => [...prev, newRecord])
            }
        } catch (error) {

        }
    }
    const updateRecord = async (id: string, newRecord: financialRecord) => {

        const response = await fetch(`http://localhost:3004/financial-record/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecord)
        })
        try {
            if (response.ok) {
                const newRecord = await response.json()
                setRecords((prev) => prev.map((record) => {
                    if (record._id === id) {
                        return newRecord
                    } else {
                        return record
                    }
                }))
            }
        } catch (error) {

        }
    }
    const deleteRecord = async (id: string) => {

        const response = await fetch(`http://localhost:3004/financial-record/${id}`, {
            method: "DELETE",
        })
        try {
            if (response.ok) {
                const deletedRecord = await response.json()
                setRecords((prev) => prev.filter((record) => record._id !== deletedRecord._id))

            }
        } catch (error) {

        }
    }

    return (
        <financialRecordContext.Provider value={{ records, addRecord, updateRecord, deleteRecord }}>
            {children}
        </financialRecordContext.Provider>
    )

}

export const useFinancialRecord = () => {
    const context = useContext<financialRecordContextType | undefined>(
        financialRecordContext
    );
    if (!context) {
        throw new Error(" Error in form financial record context")
    }
    return context
}