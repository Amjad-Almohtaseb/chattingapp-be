const { UserProfile } = require("../db/models");

exports.userProfileUpdate = async (req, res, next) => {
  const { userprofileId } = req.params;
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const foundUserProfile = await UserProfile.findByPk(userprofileId);

    if (foundUserProfile) {
      foundUserProfile.update(req.body);
      res.json(foundUserProfile);
    } else {
      next({ message: "user profile not Found", status: 404 });
    }
  } catch (error) {
    next(error);
  }
};

exports.profilesList = async (_, res, next) => {
  try {
    const userProfiles = await UserProfile.findAll();
    res.json(userProfiles);
  } catch (error) {
    next(error);
  }
};
