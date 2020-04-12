const getUsersList = require("../services/getUsers");

async function getUsers(req, res) {
  let response = await getUsersList();
  return res.json({
    user: response,
  });
}

module.exports = getUsers;
