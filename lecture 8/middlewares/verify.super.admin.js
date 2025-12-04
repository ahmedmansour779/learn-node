const CustomError = require("../utils/customError");

const verifySuperAdmin = (req, res, next) => {
    if (!req.user) {
        throw CustomError.create(401, "not authenticated");
    }

    if (req.user.data.type !== "super admin") {
        throw CustomError.create(403, "only super admin can access this data");
    }

    next();
}

module.exports = verifySuperAdmin;
