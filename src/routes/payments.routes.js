const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator")
const { execute } = require("../database/mysql.connector")
const { Payment } = require("../model/payment.model")

router.post("/addPayment",
    [
        check("typeofpayment_idtypeofpayment").exists({ checkFalsy: true }).withMessage("Payment type not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("amount").exists({ checkFalsy: true }).withMessage("Amount not provided").trim().toFloat()
            .isFloat().withMessage("Wrong value provided"),
        check("payed").exists().withMessage("Information if payment is payed wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("prepaid").exists().withMessage("Information if payment is prepaid wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("billing_address").optional().exists({ checkFalsy: true }).withMessage("Billing address wasn't provided").trim()
    ], async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while creating a user",
                });
            }
            // console.log("req.body in /addPayment ", req.body)
            const {
                typeofpayment_idtypeofpayment,
                amount,
                payed,
                prepaid,
                billing_address
            } = req.body;

            const newPayment = new Payment(null, typeofpayment_idtypeofpayment, amount, payed, prepaid, null, billing_address)
            // console.log(billing_address)
            // console.log("newPayment inside /addPayment", newPayment.toString())
            const { paymentCreated, createdPayment } = await Payment.createPayment(newPayment);
            if (paymentCreated) {
                return res.status(200).json({ createdPayment });

            } else {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        } catch (error) {
            // console.log(error);
            return res.status(500).json({
                message: "Invalid data",
                errors: [
                    { value: error, msg: error.message },
                ],
            });
        }
    })


router.post("/updatePayment",
    [
        check("idpayment").exists({ checkFalsy: true }).withMessage("Payment not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("typeofpayment_idtypeofpayment").exists({ checkFalsy: true }).withMessage("Payment type not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("amount").exists({ checkFalsy: true }).withMessage("Amount not provided").trim().toFloat()
            .isFloat().withMessage("Wrong value provided"),
        check("payed").exists().withMessage("Information if payment is payed wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("prepaid").exists().withMessage("Information if payment is prepaid wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("transactionid").exists({ checkFalsy: true }).withMessage("Transaction id not provided").trim()
            .isLength({ max: 20 }).withMessage("Transaction id can't be no more than 20 characters long"),
        check("billing_address").optional().exists({ checkFalsy: true }).withMessage("Billing address wasn't provided").trim()

    ], async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while creating a user",
                });
            }
            // console.log("req.body in /updatePayment ", req.body)
            const {
                idpayment,
                typeofpayment_idtypeofpayment,
                amount,
                payed,
                prepaid,
                transactionid,
                billing_address
            } = req.body;

            const payment = new Payment(
                idpayment,
                typeofpayment_idtypeofpayment,
                amount,
                payed,
                prepaid,
                transactionid,
                billing_address
            )
            // console.log("updatePayment inside /updatePayment", payment.toString())
            const { paymentInfoIsSame, updatedPayment } = await Payment.updatePayment(payment);
            // // console.log("updatedPayment ", updatedPayment);
            // // console.log("paymentInfoIsSame ", paymentInfoIsSame);
            // // console.log("typeof updatedPayment  === undefined ", updatedPayment === undefined);
            if (!paymentInfoIsSame && typeof updatedPayment === 'object') {
                return res.status(200).json({ updatedPayment });
            } else if (!paymentInfoIsSame && updatedPayment === undefined) {
                return res.status(500).json({ message: "Internal Server Error" });
            } else if (paymentInfoIsSame) {
                return res.status(400).json({ updatedPayment, message: "Payment was not updated, because the delivery info is the same" });
            }
            // // console.log("response from createDelivery inside /addWholeDelivery", response)
        } catch (error) {
            // console.log(error);
            return res.status(500).json({
                message: "Invalid data",
                errors: [
                    { value: error, msg: error.message },
                ],
            });
        }
    })

router.delete("/deletePayment", [
    check("idpayment", "Paymnet Id not provided").exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data while deleting a Payment",
            });
        }
        const { idpayment } = req.body
        const { paymentDeleted, deletedPayment } = await Payment.deletePayment(idpayment)
        if (paymentDeleted) {
            return res.status(200).json({ payment: deletedPayment });
        } else {
            return res.status(500).json({ message: "Internal Server Error when deleting" });
        }
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            message: "Invalid data",
            errors: [
                { value: error, msg: error.message },
            ],
        });
    }
})

router.post("/getPayment", async (req, res) => {
    const { idpayment } = req.body
    const payment = await Payment.getPayment(idpayment);
    // console.log(payment);
    return res.status(200).json({ payment });
})

router.get("/getPayments", async (req, res) => {

    const payments = await Payment.getAllPayments();
    // console.log(payments);
    return res.status(200).json({ payments });
})


module.exports = router;

