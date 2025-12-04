const CustomError = require("../utils/customError");

const verifyAdmin = (req, res, next) => {
    if (!req.user) {
        throw CustomError.create(401, "not authenticated");
    }

    if (req.user.data.type !== "admin" && req.user.data.type !== "super admin") {
        throw CustomError.create(403, "only admin can access this data");
    }

    next();
}

module.exports = verifyAdmin;