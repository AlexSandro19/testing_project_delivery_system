const { Router } = require("express");
const router = Router();
const { Delivery } = require("../model/delivery.model");
const { Package } = require("../model/package.model");
const { Payment } = require("../model/payment.model");
const { check, validationResult } = require("express-validator");

router.post("/addDelivery",
    [
        check("packages_idpackages").exists({ checkFalsy: true }).withMessage("Package not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("priority").exists({ checkFalsy: false }).withMessage("Information about delivery priority wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("payment_idpayment").exists({ checkFalsy: true }).withMessage("Payment not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("international").exists({ checkFalsy: false }).withMessage("Information if delivery is international wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("start_location").exists({ checkFalsy: true }).withMessage("Start location not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("end_location").exists({ checkFalsy: true }).withMessage("End location not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("message").optional().exists().withMessage("Message not provided").trim()
            .isLength({ max: 150 }).withMessage("Message should be no more than 150 characters long"),
        check("start_date").exists({ checkFalsy: true }).withMessage("Start date not provided").trim()
            .toDate().withMessage("Value provided is not a date"),
        check("estimated_date").exists({ checkFalsy: true }).withMessage("Start date not provided").trim()
            .toDate().withMessage("Value provided is not a date"),
        check("end_date").exists({ checkFalsy: true }).withMessage("Start date not provided").trim()
            .toDate().withMessage("Value provided is not a date"),
    ], async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors.array());
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while creating a user",
                });
            }
            // console.log("req.body in /addDelivery ", req.body)
            const {
                packages_idpackages,
                priority,
                payment_idpayment,
                international,
                start_location,
                end_location,
                message,
                start_date,
                estimated_date,
                end_date

            } = req.body;
            // console.log(await Delivery.updateDeliveries(1,true,1,true,1,1,"","2021-07-19T01:30:07.000Z","2021-07-19T01:30:07.000Z","2021-07-19T01:30:07.000Z","D332CD90-8A43"))

            const newDelivery = new Delivery(
                null,
                packages_idpackages,
                priority,
                payment_idpayment,
                international,
                start_location,
                end_location,
                message,
                estimated_date,
                start_date,
                end_date
            )

            console.log("newDelivery inside addDelivery", newDelivery)
            const { deliveryCreated, createdDelivery } = await Delivery.createDelivery(newDelivery);
            // example of what Delivery.createDelivery() should return 
            // OkPacket {
            //     fieldCount: 0,
            //     affectedRows: 1,
            //     insertId: 14,
            //     serverStatus: 2,
            //     warningCount: 0,
            //     message: '',
            //     protocol41: true,
            //     changedRows: 0
            //   }
            // values can be accessed through response.insertId
            // console.log("newDelivery:", newDelivery.toString());

            if (deliveryCreated) {
                return res.status(200).json({ createdDelivery });

            } else {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Invalid data",
                errors: [
                    { value: error, msg: error.message },
                ],
            });
        }
    })

router.post("/updateDelivery",
    [
        check("iddeliveries").exists({ checkFalsy: true }).withMessage("Delivery not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("packages_idpackages").exists({ checkFalsy: true }).withMessage("Package not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("priority").exists().withMessage("Information about delivery priority wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("payment_idpayment").exists({ checkFalsy: true }).withMessage("Payment not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("international").exists().withMessage("Information if delivery is international wasn't provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("start_location").exists({ checkFalsy: true }).withMessage("Start location not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("end_location").exists({ checkFalsy: true }).withMessage("End location not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("message").optional().exists().withMessage("Message not provided").trim()
            .isLength({ max: 150 }).withMessage("Message should be no more than 150 characters long"),
        check("start_date").exists({ checkFalsy: true }).withMessage("Start date not provided").trim()
            .toDate().withMessage("Value provided is not a date"),
        check("estimated_date").exists({ checkFalsy: true }).withMessage("Start date not provided").trim()
            .toDate().withMessage("Value provided is not a date"),
        check("end_date").exists({ checkFalsy: true }).withMessage("Start date not provided").trim()
            .toDate().withMessage("Value provided is not a date"),
        check("uid").optional().exists().withMessage("UUID not provided").trim()
            .isLength({ max: 36 }).withMessage("Message should be no more than 36 characters long"), // MUST BE CHANGED
    ], async (req, res) => {
        try {
            console.log("req.body in /updateDelivery ", req.body)
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while creating a user",
                });
            }
            console.log("req.body in /updateDelivery ", req.body)
            const {
                iddeliveries,
                packages_idpackages,
                priority,
                payment_idpayment,
                international,
                start_location,
                end_location,
                message,
                estimated_date,
                start_date,
                end_date,
                uid
            } = req.body;
            const delivery = new Delivery(
                iddeliveries,
                packages_idpackages,
                priority,
                payment_idpayment,
                international,
                start_location,
                end_location,
                message,
                estimated_date,
                start_date,
                ((end_date != null) ? new Date(end_date) : null),
                uid
            )
            console.log("delivery inside /updateDelivery", delivery.toString())
            const { deliveryInfoIsSame, updatedDelivery } = await Delivery.updateDelivery(delivery);
            console.log("updatedDelivery ", updatedDelivery);
            console.log("deliveryInfoIsSame ", deliveryInfoIsSame);

            if (!deliveryInfoIsSame && typeof updatedDelivery === 'object') {
                return res.status(200).json({ updatedDelivery });
            } else if (!deliveryInfoIsSame && updatedDelivery === undefined) {
                return res.status(500).json({ message: "Internal Server Error" });
            } else if (deliveryInfoIsSame) {
                return res.status(400).json({ updatedDelivery, message: "Delivery was not updated, because the delivery info is the same" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Invalid data",
                errors: [
                    { value: error, msg: error.message },
                ],
            });
        }
    })

router.delete("/deleteDelivery", [
    check("iddeliveries", "Id of delivery not provided").exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data while deleting a Delivery",
            });
        }

        const { iddeliveries } = req.body
        const { deliveryDeleted, deletedDelivery } = await Delivery.deleteDelivery(iddeliveries)
        if (deliveryDeleted) {
            return res.status(200).json({ delivery: deletedDelivery });
        } else {
            return res.status(500).json({ message: "Internal Server Error when deleting" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Invalid data",
            errors: [
                { value: error, msg: error.message },
            ],
        });
    }
})


router.post("/getDelivery", async (req, res) => {
    try{
        const { iddeliveries } = req.body
        const delivery = await Delivery.getDelivery(iddeliveries);
        console.log(delivery);
        return res.status(200).json({ delivery });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Invalid data",
            errors: [
                { value: error, msg: error.message },
            ],
        });
    }

})

router.get("/getDeliveries", async (req, res) => {
    try{
        const deliveries = await Delivery.getAllDeliveries();
        console.log(deliveries);
        return res.status(200).json({ deliveries });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Invalid data",
            errors: [
                { value: error, msg: error.message },
            ],
        });
    }

})


module.exports = router;
