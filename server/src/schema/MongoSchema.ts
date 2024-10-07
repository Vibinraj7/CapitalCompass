import mongoose from "mongoose";

interface financialRecord {
    userId: String;
    Date: Date;
    description: String;
    amount: Number;
    category: String;
    paymentMethod: String
}

const mongoSchema = new mongoose.Schema<financialRecord>({
    userId: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
})

const FinancialRecordModel = mongoose.model<financialRecord>('FinancialRecord', mongoSchema)

export default FinancialRecordModel;