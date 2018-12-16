// NOTE: Can modify this to many controllers

function index(req, res, next) {
  res.render("pages/index", { title: "Change Me" });
}

module.exports = {
  index
};
