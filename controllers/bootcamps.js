const Bootcamp = require("../models/Bootcamp");

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const allBootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: allBootcamps.length, data: allBootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc  Get a single bootcamp by id
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: "bootcamp dosen't exist" });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc  Create a new bootcamp
// @route POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const savedBootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: savedBootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc  update a single bootcamp by id
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (bootcamp) {
      return res.status(200).json({
        success: true,
        status: "Bootcamp updated successfully",
        data: bootcamp,
      });
    }
    res
      .status(200)
      .json({ success: false, status: "bootcamp dosent not exist" });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc  delete a single bootcamp by id
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: "bootcamp doesnt exist" });
    }
    return res
      .status(200)
      .json({ success: true, message: "bootcamp deleted successfully" });
  } catch (error) {
    res.status(200).json({ success: false });
  }
};
