async function findUser(username, room) {
  try {
    const userExists = await strapi.services.users.find({ username, room });
    return userExists;
  } catch (err) {
    console.log("error while fetching :", err);
  }
}

async function createUser({ username, room, status, socketId }) {
  try {
    console.log("socketId", socketId);

    const user = await strapi.services.users.create({
      username,
      room,
      status,
      socketId,
    });
    return user;
  } catch (err) {
    console.log("User could not be created .. Try again later");
  }
}

async function userExists(id) {
  try {
    const user = strapi.services.users.findOne({ id: id });
    return user;
  } catch (err) {
    console.log("Error when fetching user :", err);
  }
}

async function getUsersInRoom(room) {
  try {
    const usersInRoom = await strapi.services.users.find({ room });
    console.log(usersInRoom);
    return usersInRoom;
  } catch (err) {
    console.log("Error happened :", err);
  }
}

async function deleteUser(socketId) {
  try {
    const user = await strapi.services.users.delete({ socketId: socketId });
    return user;
  } catch (err) {
    console.log("Error while deleting the user :", err);
  }
}

module.exports = {
  findUser,
  createUser,
  userExists,
  getUsersInRoom,
  deleteUser,
};
