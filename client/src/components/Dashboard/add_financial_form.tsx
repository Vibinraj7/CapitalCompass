import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useFinancialRecord } from '../../context/financial_record_context'
import './financial_form.css'


export const AddFinancialList = () => {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [payment, setPayment] = useState<string>("")
    const { addRecord } = useFinancialRecord();

    const { user } = useUser();

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const newData = {
        
            userId: user?.id ?? "",
            Date: new Date().toISOString().split("T")[0],
            description: description,
            amount: parseFloat(amount),
            category: category,
            paymentMethod: payment
        }
        
        addRecord(newData)

        setDescription("")
        setAmount("")
        setCategory("")
        setPayment("")

        // console.log(newData)
    }

    return (
        <div className="form_container">
            <form onSubmit={submitForm}>
                <div className="form_field">
                    <label>Description<span className="blinking-dots1"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" id="description">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
                    </svg></span></label>
                    <input type="text" name="desc" className="input" required onChange={(event) => setDescription(event.target.value)} value={description}></input>
                </div>
                <div className="form_field">
                    <label>Amount <span className="blinking-dots1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 165 168" id="dollar">
                        <circle cx="2" cy="150.289" r="2" fill="#2d4356"></circle>
                        <path fill="#2d4356" d="M11 148.28868H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zM160 148.28868h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z"></path>
                        <circle cx="166" cy="150.289" r="2" fill="#2d4356"></circle>
                        <path fill="#0bceb2" d="M118.15387 156.28868h-8.30774a2.00641 2.00641 0 0 0 0 4h8.30774a2.00641 2.00641 0 0 0 0-4zM58.15387 156.28868H49.84613a2.00641 2.00641 0 0 0 0 4h8.30774a2.00641 2.00641 0 0 0 0-4zM104 156.28868H64a2 2 0 0 0 0 4H79.94v2H72a2 2 0 0 0 0 4H97a2 2 0 0 0 0-4H88.06v-2H104a2 2 0 0 0 0-4zM84 35.28868a53 53 0 1 0 53 53A53 53 0 0 0 84 35.28868zm0 102a49 49 0 1 1 49-49A49.05551 49.05551 0 0 1 84 137.28868z"></path>
                        <path fill="#2d4356" d="M87.68469,79.11376c-3.79651-1.24792-8.52142-2.801-8.52142-4.36566,0-2.2312,4.01184-2.4046,5.24146-2.4046a12.80174,12.80174,0,0,1,8.57025,3.171l.05194.04932a9.0739,9.0739,0,0,0,6.2157,2.86072,8.34817,8.34817,0,0,0,8.37964-8.29718,8.65837,8.65837,0,0,0-1.48541-4.81592q-.0303-.04541-.06183-.09c-2.872-4.05664-7.72046-6.95642-13.86023-8.34576V55.53179a7.77015,7.77015,0,1,0-15.5401,0v1.24872C65.75427,59.34179,61.75684,67.48937,61.75684,74.7481c0,13.8797,11.7298,17.7547,20.29449,20.584,5.617,1.85571,9.29883,3.23145,9.29883,5.36157,0,1.29419,0,3.46021-6.94543,3.46021-3.73682,0-7.063-1.58582-10.468-4.99072a8.71262,8.71262,0,0,0-6.39606-2.95532,8.359,8.359,0,0,0-7.03485,12.77588c3.20313,5.18359,9.21674,9.16907,16.16882,10.8512v1.21057a7.77015,7.77015,0,1,0,15.5401,0v-1.106c10.43195-2.18774,16.54175-9.18823,16.54175-19.24585C108.75653,86.04021,96.07581,81.872,87.68469,79.11376Zm.53009,37.391v4.54077a3.77026,3.77026,0,1,1-7.5401,0v-4.54077c-7.86493-.97314-14.02588-5.18921-16.78162-9.64868a4.35915,4.35915,0,0,1,3.64764-6.64819,4.75293,4.75293,0,0,1,3.56769,1.78381c3.40527,3.40527,7.70251,6.16223,13.29633,6.16223,7.37775,0,10.94543-2.43335,10.94543-7.46021,0-11.83728-29.59332-6.40454-29.59332-25.94562,0-7.21533,4.53955-13.45874,14.91785-14.5943v-4.622a3.77026,3.77026,0,1,1,7.5401,0V60.235c6.48828.81073,11.83984,3.40527,14.59552,7.29773a4.68032,4.68032,0,0,1,.812,2.5946,4.344,4.344,0,0,1-4.37964,4.29718,5.37058,5.37058,0,0,1-3.48523-1.78381,16.74633,16.74633,0,0,0-11.35266-4.29724c-6.72809,0-9.24146,3.16168-9.24146,6.4046,0,10.62189,29.59326,5.67633,29.59326,25.94562C104.75653,109.6129,99.0802,115.45043,88.21478,116.50475Z"></path>
                        <path fill="#2d4356" d="M150.72131 148.28868H106.3009a64 64 0 1 0-44.60175 0H17.27869a2.017 2.017 0 1 0 0 4H150.72131a2.017 2.017 0 1 0 0-4zM24 88.28868a60 60 0 1 1 60 60A60.068 60.068 0 0 1 24 88.28868zM68.30471 8.28868a3 3 0 1 0-3-3A3.00344 3.00344 0 0 0 68.30471 8.28868zm0-4.5a1.5 1.5 0 1 1-1.5 1.5A1.50148 1.50148 0 0 1 68.30471 3.78868zM135.881 29.28868a2 2 0 1 0 2 2A2.00229 2.00229 0 0 0 135.881 29.28868zm0 3a1 1 0 1 1 1-1A1.001 1.001 0 0 1 135.881 32.28868zM135.881 1.71132a2 2 0 1 0 2 2A2.00229 2.00229 0 0 0 135.881 1.71132zm0 3a1 1 0 1 1 1-1A1.001 1.001 0 0 1 135.881 4.71132zM160 58.16207a2 2 0 1 0 2 2A2.00229 2.00229 0 0 0 160 58.16207zm0 3a1 1 0 1 1 1-1A1.001 1.001 0 0 1 160 61.16207zM31 30.28868a2 2 0 1 0-2 2A2.00229 2.00229 0 0 0 31 30.28868zm-3 0a1 1 0 1 1 1 1A1.001 1.001 0 0 1 28 30.28868z"></path>
                        <polygon fill="#0bceb2" points="10.888 69.3 12.375 67.344 11.436 66.813 10.481 69.003 10.45 69.003 9.48 66.828 8.525 67.376 9.996 69.285 9.996 69.316 7.695 69.018 7.695 70.082 10.011 69.785 10.011 69.817 8.525 71.725 9.416 72.289 10.434 70.082 10.465 70.082 11.404 72.273 12.39 71.71 10.888 69.832 10.888 69.801 13.25 70.082 13.25 69.018 10.888 69.331 10.888 69.3"></polygon>
                        <polygon fill="#0bceb2" points="5.734 6.942 4.878 8.041 5.392 8.365 5.978 7.095 5.996 7.095 6.536 8.356 7.104 8.032 6.239 6.951 6.239 6.933 7.599 7.095 7.599 6.482 6.239 6.662 6.239 6.644 7.095 5.518 6.555 5.212 6.005 6.473 5.987 6.473 5.429 5.221 4.878 5.536 5.726 6.636 5.726 6.654 4.401 6.482 4.401 7.095 5.734 6.924 5.734 6.942"></polygon>
                        <polygon fill="#0bceb2" points="164.724 17.31 164.724 16.267 162.407 16.573 162.407 16.543 163.866 14.625 162.945 14.103 162.009 16.251 161.977 16.251 161.027 14.118 160.089 14.655 161.533 16.528 161.533 16.558 159.276 16.267 159.276 17.31 161.548 17.019 161.548 17.05 160.089 18.921 160.964 19.474 161.963 17.31 161.992 17.31 162.913 19.459 163.881 18.906 162.407 17.065 162.407 17.034 164.724 17.31"></polygon>
                        <polygon fill="#0bceb2" points="106.758 16.231 108.016 14.576 107.222 14.126 106.414 15.979 106.387 15.979 105.567 14.139 104.759 14.603 106.004 16.218 106.004 16.244 104.057 15.993 104.057 16.893 106.017 16.641 106.017 16.668 104.759 18.283 105.513 18.76 106.374 16.893 106.4 16.893 107.195 18.746 108.029 18.27 106.758 16.681 106.758 16.654 108.757 16.893 108.757 15.993 106.758 16.257 106.758 16.231"></polygon>
                    </svg></span></label>
                    <input type="number" name="amount" className="input" required onChange={(event) => setAmount(event.target.value)} value={amount}></input>
                </div>
                <div className="form_field">
                    <label>Category   <span className="blinking-dots1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" id="category">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"></path>
                    </svg></span></label>
                    <select className="input" name="cat" required onChange={(event) => setCategory(event.target.value)} value={category}>
                        <option value={""}>Select a Category</option>
                        <option value={"salary"}>Salary</option>
                        <option value={"food"}>Food</option>
                        <option value={"rent"}>Rent</option>
                        <option value={"util"}>Utilities</option>
                        <option value={"entertainment"}>Entertainment</option>
                        <option value={"hospital"}>Hospital</option>
                        <option value={"drugs"}>Drugs</option>
                        <option value={"other"}>Other</option>
                    </select>
                </div>
                <div className="form_field">
                    <label>Payment Type  <span className="blinking-dots1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 60 55" id="payment">
                        <path d="M11.82,31.58,4.2,34.52l7.25,18.74,7.62-2.95-.62-1.6L20,48.12,36,52a8,8,0,0,0,4.81-.32l16.15-6.25A4.51,4.51,0,1,0,53.65,37L45,40.33l-.07-.21a6.26,6.26,0,0,0-3.66-3.82l-16-6.11a6.76,6.76,0,0,0-4.87,0l-7.95,3.08Zm8,14.26-2.17.84-4.4-11.37,8-3.08a4.63,4.63,0,0,1,3.3,0l16,6.12a4,4,0,0,1,2.37,2.47l.1.3-.44.17a6,6,0,0,1-4.13.09L28,37.83l-.7,2.07,10.43,3.54a8.29,8.29,0,0,0,5.62-.12l.34-.14,1.07-.41L54.44,39a2.33,2.33,0,1,1,1.68,4.34L40,49.61a5.93,5.93,0,0,1-3.51.23Z"></path>
                        <path d="M42.26,10.74A10.66,10.66,0,1,0,52.91,21.4,10.67,10.67,0,0,0,42.26,10.74Zm0,19.94a9.28,9.28,0,1,1,9.27-9.28A9.29,9.29,0,0,1,42.26,30.68Z"></path>
                        <path d="M42.68,19.53v-4a3.81,3.81,0,0,1,1.16.5,3.33,3.33,0,0,1,.94,1,5.63,5.63,0,0,1,.63,1.45h.35v-2.6a7.52,7.52,0,0,0-3.08-1v-.42H41.9v.42a4.49,4.49,0,0,0-2.7,1.12,2.85,2.85,0,0,0-.9,2.07A2.75,2.75,0,0,0,39,20a14.16,14.16,0,0,0,2.89,2.18v4.45a3.86,3.86,0,0,1-1.47-.39,2.51,2.51,0,0,1-1-.92,4.47,4.47,0,0,1-.57-1.6h-.38v2.91a10.18,10.18,0,0,0,1.69.5,9.45,9.45,0,0,0,1.7.16v1h.78V27.24a4,4,0,0,0,2.6-1.1,3.21,3.21,0,0,0,.94-2.35,3.31,3.31,0,0,0-.79-2.21A14.22,14.22,0,0,0,42.68,19.53ZM41.9,19a5.25,5.25,0,0,1-1.39-1.16,1.35,1.35,0,0,1,.33-2,2.05,2.05,0,0,1,1.06-.36Zm1.92,7a2,2,0,0,1-1.14.62v-3.9a5,5,0,0,1,1.18,1.12,2,2,0,0,1,.32,1.07A1.66,1.66,0,0,1,43.82,26Z"></path>
                    </svg></span></label>
                    <select className="input" name="payment" required onChange={(event) => setPayment(event.target.value)} value={payment}>
                        <option value={""}> Select Payment Mehtod</option>
                        <option value={"creditcard"}>Credit Card</option>
                        <option value={"debitcard"}> Debit Card</option>
                        <option value={"upi"}> UPI</option>
                        <option value={"cash"}> Cash</option>
                    </select>
                </div>
                <button className="button-33" type="submit">Add Record</button>
            </form>
        </div>
    )
}


