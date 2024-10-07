import { useUser } from "@clerk/clerk-react"
import { AddFinancialList } from "./add_financial_form";
import { ShowFinancilaList } from "./show_financial_list";
import './financial_form.css'
import { useFinancialRecord } from "../../context/financial_record_context";
import { useMemo } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'

export const DashBoard = () => {
    const { user } = useUser();
    const { records } = useFinancialRecord();

    const totalMonthly = useMemo(() => {
        let total = 0
        records.forEach((record) => {
            total += Number(record.amount)
        })
        return total;
    }, [records])

    return (

        <div className="dash_container">

            <div className='sign-in-container'>
                <SignedOut>
                    <div className="signUp-signIn">
                        <SignUpButton mode="modal" />
                        <SignInButton mode="modal" />
                    </div>
                </SignedOut>
                <div className="user_button">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </div>
            <h1>Welcome to CapitalCompass {user?.firstName}.<span className="blinking-dots">|</span></h1>
            <AddFinancialList />
            <br></br>
            <br></br>
            <h4 className="amount_div">Total Monthly<span className="blinking-dots"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 100 100" id="cash-payement">
                <polygon fill="none" points="56.76 56.98 56.68 56.78 55.92 57.06 55.92 57.06 56.76 56.98"></polygon>
                <path fill="none" d="M59.44,21.57,59,21.3c.11.5.21,1,.29,1.51l.75-.38Z"></path>
                <path fill="#ced9df" d="M82.47,54.56l.35-.76c.12-.25.21-.5.31-.75l-23-30.62-.75.38a23.9,23.9,0,0,1,.28,3.62A23.44,23.44,0,0,1,52.4,43.32l4.89,13.24-.61.22.08.2Z"></path>
                <path fill="#fecb37" d="M41.66,34.8A4.47,4.47,0,0,0,42,33.22c0-2.86-2.72-5.2-6.08-5.2V28c-4.32-.43-7.69-3.74-7.69-7.76s3.17-7.13,7.31-7.71V9.06h2.9v3.47c4,.67,7.09,3.85,7.09,7.68H42.57c0-2.71-2.57-4.91-5.74-4.91s-5.75,2.2-5.75,4.91,2.58,4.91,5.75,4.91v0c4.51.43,8,3.88,8,8.06A7.42,7.42,0,0,1,44.64,35a9.1,9.1,0,0,1,6.64,5.35,20.52,20.52,0,1,0-23,5.06A9,9,0,0,1,37.24,34.8Z"></path>
                <path fill="#ced9df" d="M72.69 75.86l9.78-21.3L56.76 57l-.84.08h0l-1.36.5L48.72 41.72a6.19 6.19 0 00-5.77-4H37.24a6.14 6.14 0 00-5.79 8.2L42 75.86zM83.13 53.05a16.26 16.26 0 00-6-19.64L59.44 21.57l.64.86z"></path>
                <polygon fill="#ced9df" points="84.15 54.4 84.15 54.4 84.15 54.4 84.15 54.4"></polygon>
                <path fill="#70c8f2" d="M80.48,78.77H34.93a3.84,3.84,0,0,0-3.84,3.84v7.65a3.84,3.84,0,0,0,3.84,3.83H80.48a3.84,3.84,0,0,0,3.84-3.83V82.61A3.84,3.84,0,0,0,80.48,78.77Z"></path>
                <path fill="#333" d="M80.48,75.86H75.89L85.47,55A19.17,19.17,0,0,0,78.7,31L57.59,16.83l0,0a23.42,23.42,0,1,0-28.16,32l9.54,27h-4a6.76,6.76,0,0,0-6.75,6.75v7.65A6.76,6.76,0,0,0,34.93,97H80.48a6.76,6.76,0,0,0,6.75-6.74V82.61A6.76,6.76,0,0,0,80.48,75.86ZM84.15,54.4ZM29.85,38.62a8.9,8.9,0,0,0-1.52,6.76,20.52,20.52,0,1,1,23-5.06A9.1,9.1,0,0,0,44.64,35a7.42,7.42,0,0,0,.22-1.75c0-4.18-3.52-7.63-8-8.06v0c-3.17,0-5.75-2.21-5.75-4.91s2.58-4.91,5.75-4.91,5.74,2.2,5.74,4.91h2.91c0-3.83-3.06-7-7.09-7.68V9.06h-2.9V12.5c-4.14.58-7.31,3.81-7.31,7.71s3.37,7.33,7.69,7.76V28c3.36,0,6.08,2.34,6.08,5.2a4.47,4.47,0,0,1-.29,1.58H37.24A8.94,8.94,0,0,0,29.85,38.62Zm1.6,7.28a6.14,6.14,0,0,1,5.79-8.2H43a6.19,6.19,0,0,1,5.77,4l5.84,15.84,1.36-.5.76-.28.61-.22L52.4,43.32a23.44,23.44,0,0,0,7.21-16.89,23.9,23.9,0,0,0-.28-3.62c-.08-.51-.18-1-.29-1.51l.4.27L77.08,33.41a16.26,16.26,0,0,1,6,19.64c-.1.25-.19.5-.31.75l-.35.76-9.78,21.3H42ZM84.32,90.26a3.84,3.84,0,0,1-3.84,3.83H34.93a3.84,3.84,0,0,1-3.84-3.83V82.61a3.84,3.84,0,0,1,3.84-3.84H80.48a3.84,3.84,0,0,1,3.84,3.84Z"></path>
            </svg></span>: {totalMonthly}</h4>
            <ShowFinancilaList />
        </div>
    )
}
