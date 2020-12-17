const { User } = require("../models");

exports.createUser = async (req, res, next) => {
  // send back the new user
  // redirect new user to /profile

  User.create(req.body, function (err, user) {
    if (err) {
      return next(err);
    } else {
      req.session.userId = user._id;
      console.log(user, req.session);
      return res.status(200).json({
        success: true,
        redirectUrl: "/profile",
        user: { name: user.name, email: user.email },
      });
    }
  });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  User.authenticate(email, password, (err, user) => {
    if (err)
      return res.status(403).json({
        success: false,
      });
    req.session.userId = user._id;

    res.status(200).json({
      success: true,
      redirectUrl: "/profile",
      user: { name: user.name, email: user.email },
    });
  });
};

exports.logoutUser = async (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.status(200).json({
          success: true,
          redirectUrl: "/login",
        });
      }
    });
  }
};

exports.getUser = async (req, res, next) => {
  // send back authenticated user
  // redirect to login if there's no authenticated user
  console.log(req.session, req.session.userId);
  if (req.session.userId) {
    const user = await User.findById(req.session.userId);
    console.log(user, req.session.userId);
    return res.status(200).json({
      success: true,
      user: { name: user.name, email: user.email },
    });
  } else {
    return res.status(403).json({
      success: false,
      redirectUrl: "/register",
    });
  }
};
