const bcrypt = require('bcryptjs')
const testHash = async () => {
    const hashPassword = await bcrypt.hash('abbdef', 8)
    console.log(hashPassword);

    const isMatch = await bcrypt.compare('abbdef', hashPassword)
    console.log(isMatch)
}
testHash()
