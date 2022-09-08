const getUsers = (request, response) => {
    response.status(200).send("Get all user");
};

const getUser = (request, response) => {
    response.status(200).send("Get a single user");
};

const createUser = (request, response) => {
    response.status(200).send("create New user");
};

const updateUser = (request, response) => {
    response.status(201).send("update user info");
};

const deleteUser = (request, response) => {
    response.status(200).send("Delete user");
};

module.exports ={
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};