// const bcrypt = require('bcryptjs')
// const testHash = async () => {
//     const hashPassword = await bcrypt.hash('abbdef', 8)
//     console.log(hashPassword);

//     const isMatch = await bcrypt.compare('abbdef', hashPassword)
//     console.log(isMatch)
// }
// testHash()

const aa = {
    "name": "chungpb",
    "age": 30
}

aa.toJSON = function() {

    console.log(aa)
    return this
}
console.log(JSON.stringify(aa))


const UserRoles = {
    SUPPER_ADMIN: "Supper Admin",
    ADMIN: "Admin",
    STAFF: "Staff"
}
console.log(UserRoles.SUPPER_ADMIN)