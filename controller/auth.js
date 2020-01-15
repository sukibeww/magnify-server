const HOME = process.env.HOMEPAGE

const login = (req, res) => {
  if (req.user) {
    res.json(req.user)
  }
}
const logout = async (req, res) => {
  req.session.destroy(function() {
    req.logout()
  })
}

module.exports = { login, logout }
