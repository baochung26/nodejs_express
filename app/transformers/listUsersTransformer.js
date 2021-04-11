const transformer = (users) => {
    users.array.forEach(user, index => {
        data[index].name = user.name
        data[index].email = user.email
        data[index].posts = user.posts
    });
    return data
}

const listUsersTransformer = {
    transformer
};
module.exports = listUsersTransformer