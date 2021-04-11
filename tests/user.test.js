const request = require('supertest')
const app = require('../app')
const { User } = require('../app/models/user')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should login existing user', async () => {
    const response = await request(app).post('/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    console.log(user.tokens[1])
    console.log(response.body.access_token)
    expect(response.body.access_token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/login').send({
        email: userOne.email,
        password: 'thisisnotmypass'
    }).expect(400)
})