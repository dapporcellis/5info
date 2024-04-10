export default function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
};