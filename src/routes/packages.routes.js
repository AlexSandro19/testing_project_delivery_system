const { Router } = require("express");
const router = Router();
const { execute } = require("../database/mysql.connector")
const { Package } = require("../model/package.model")
const { check, validationResult } = require("express-validator")
const {calculateAmount,calculateVolume} = require("../utility/utility.calculations");

router.post("/addPackage",
    [
        check("userId").exists({ checkFalsy: true }).withMessage("User not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("weight").exists({ checkFalsy: true }).withMessage("Weight not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("height").exists({ checkFalsy: true }).withMessage("Height not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("width").exists({ checkFalsy: true }).withMessage("Width not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("depth").exists({ checkFalsy: true }).withMessage("Depth not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("fragile").exists().withMessage("Information if packge is fragile not provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("electronics").exists().withMessage("Information if has electronics not provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("oddsized").exists().withMessage("Information if package is odd sized not provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
    ], async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while creating a user",
                });
            }
            // console.log("req.body in /addPackage ", req.body)
            const {userId,weight,height,width,depth,fragile,electronics,oddsized} = req.body;
            const newPackage = new Package(null,userId, weight,height, width, depth, fragile,electronics,oddsized,null)
            console.log("newPackage inside /addPackage", newPackage.toString())
            const volume = calculateVolume(height,width,depth);
            const { packageCreated, createdPackage } = await Package.createPackage(newPackage);
            const amount = calculateAmount(volume,weight,0,electronics,oddsized,fragile)
            if (packageCreated) {
                const idpackages = createdPackage.idpackages
                const user_iduser = createdPackage.user_iduser
                return res.status(200).json({ idpackages,user_iduser,weight,height,width,depth,fragile,electronics,oddsized,amount  });
            } else {
                return res.status(500).json( { message: "Internal Server Error" });
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


router.post("/updatePackage",
    [
        check("idpackages").exists({ checkFalsy: true }).withMessage("Package not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("user_iduser").exists({ checkFalsy: true }).withMessage("User not provided").trim()
            .toInt().isInt({ min: 0 }).withMessage("Wrong value provided"),
        check("weight").exists({ checkFalsy: true }).withMessage("Weight not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("height").exists({ checkFalsy: true }).withMessage("Height not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("width").exists({ checkFalsy: true }).withMessage("Width not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("depth").exists({ checkFalsy: true }).withMessage("Depth not provided").trim().toFloat()
            .isFloat({ min: 0.00 }).withMessage("Wrong value provided"),
        check("fragile").exists().withMessage("Information if packge is fragile not provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("electronics").exists().withMessage("Information if has electronics not provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
        check("oddsized").exists().withMessage("Information if package is odd sized not provided").trim()
            .toInt().isInt({ min: 0, max: 1 }).withMessage("Wrong value provided"),
    ], async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while creating a user",
                });
            }
            // console.log("req.body in /addPackage ", req.body)
            const {
                idpackages,
                user_iduser,
                weight,
                height,
                width,
                depth,
                fragile,
                electronics,
                oddsized,
            } = req.body;
            // console.log(await Delivery.updateDeliveries(1,true,1,true,1,1,"","2021-07-19T01:30:07.000Z","2021-07-19T01:30:07.000Z","2021-07-19T01:30:07.000Z","D332CD90-8A43"))
            const newPackage = new Package(
                idpackages,
                user_iduser,
                weight,
                height,
                width,
                depth,
                fragile,
                electronics,
                oddsized,
                null
            )
            console.log("newPackage inside /addPackage", newPackage.toString())
            const { packageInfoIsSame, updatedPackage } = await Package.updatePackage(newPackage);
            if (!packageInfoIsSame && typeof updatedPackage === 'object') {
                return res.status(200).json({updatedPackage });
            } else if (!packageInfoIsSame && updatedPackage === undefined) {
                return res.status(500).json({ message: "Internal Server Error" } );
            } else if (packageInfoIsSame) {
                return res.status(400).json({updatedPackage, message: "Package was not updated, because the package info is the same" });
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

router.delete("/deletePackage", [
    check("idpackages", "Id id not provided").exists(),
],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Invalid data while deleting a Package",
                });
            }

            var { idpackages } = req.body
            const { packageDeleted, deletedPackage } = await Package.deletePackage(idpackages)
            if (packageDeleted) {
                return res.status(200).json( {package: deletedPackage} );
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


router.post("/getPackage", async (req, res) => {
    const { idpackages } = req.body
    const receivedPackage = await Package.getPackage(idpackages);
    console.log(receivedPackage);
    return res.status(200).json({ package: receivedPackage });
})

router.get("/getPackages", async (req, res) => {

    const packages = await Package.getAllPackages();
    console.log(packages);
    return res.status(200).json({ packages });
})

module.exports = router;
