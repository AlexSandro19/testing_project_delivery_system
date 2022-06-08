const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator")
const { execute } = require("../database/mysql.connector");
const { Location } = require("../model/location.model");

router.post("/addLocation",
  [
    check("typeOfLocationId", "Type of lcoation id not provided").exists(),
    check("address", "Address not provided").exists(),
    check("zipCode", "Zipc ode name not provided").exists(),
    check("cityId", "City id not provided").exists(),

  ], async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data while creating a location",
        });
      }
      const { typeOfLocationId, address, zipCode, cityId } = req.body;
      const newLocation = new Location(null, typeOfLocationId, address, zipCode, cityId);
      const checkLocationExistence = await Location.getLocationIfAdressZipCityExists(zipCode, cityId, address)
      // console.log(newLocation)
      // console.log("checkLocationExistence: ", checkLocationExistence)
      if (checkLocationExistence != undefined) {
        // console.log("here")
        return res.status(200).json({ createdLocation: checkLocationExistence })
      } else {
        // console.log("there")
        const { locationCreated, createdLocation } = await Location.createLocation(newLocation)
        if (locationCreated) {
          return res.status(200).json({ createdLocation });
        } else {
          return res.status(500).json({ message: "Internal Server Error" });
        }
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

router.post("/updateLocation",
  [
    check("idlocation", "Id id not provided").exists(),
    check("typeOfLocationId", "Type of lcoation id not provided").exists(),
    check("address", "Address not provided").exists(),
    check("zipCode", "Zipc ode name not provided").exists(),
    check("cityId", "City id not provided").exists(),

  ], async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data while creating a location",
        });
      }
      const { idlocation, typeOfLocationId, address, zipCode, cityId } = req.body;
      const location = new Location(idlocation, typeOfLocationId, address, zipCode, cityId);
      // console.log(location)
      const { locationInfoIsSame, updatedLocation } = await Location.updateLocation(location)
      if (!locationInfoIsSame && typeof updatedLocation === 'object') {
        return res.status(200).json({ updatedLocation });
      } else if (!locationInfoIsSame && updatedLocation === undefined) {
        return res.status(500).json({ message: "Internal Server Error" });
      } else if (locationInfoIsSame) {
        return res.status(400).json({ updatedLocation, message: "Location was not updated, because the location info is the same" });
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

router.delete("/deleteLocation", [
  check("idlocation", "Id id not provided").exists(),
],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data while deleting a Location",
        });
      }

      var { idlocation } = req.body
      const { locationDeleted, deletedLocation } = await Location.deleteLocation(idlocation)
      if (locationDeleted) {
        return res.status(200).json({ location: deletedLocation });
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

module.exports = router;