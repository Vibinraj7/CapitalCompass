import express, { Request, Response } from "express";
import FinancialRecordModel from '../schema/MongoSchema';
import { promises } from "dns";

const router = express.Router();

//Get user from DB >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get("/getUser/:userId", async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.userId;

        const user = await FinancialRecordModel.find({ userId: userId });

        if (!user) {
            return res.status(404).send("No record found about user");
        }
        return res.status(200).send(user);
    } catch (error) {
        console.log("error at post ")
        return res.status(500).send(error);

    }
});


// Post new Financial Rcord into DB >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post('/', async (req: Request, res: Response) => {
    try {
        const newRecord = req.body;
        const saveRecord = new FinancialRecordModel(newRecord);
        const savedRecord = await saveRecord.save();
        res.status(200).send(savedRecord);

    } catch (error) {
        res.status(500).send(error)
    }
})


//Updating Users Financial Record >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.put('/:Id', async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.Id
        const newRecord = req.body
        const saveRecord = await FinancialRecordModel.findByIdAndUpdate(userId, newRecord, { new: true })

        if (!saveRecord) {
            return res.status(404).send("User Not Found")
        }

        res.status(200).send(saveRecord)
    } catch (error) {
        res.status(500).send(error)
    }
})


// Deleting Existing Users Financial record >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.delete('/:Id', async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.Id;
        const deletedUser = await FinancialRecordModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).send("User not found")
        }
         res.status(200).send(deletedUser)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router;
