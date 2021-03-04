import express from 'express'
import auth from '../controllers/auth.js'
// import users from '../controllers/users.js'
// import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/register')
  .post(auth.registerUser)

router.route('/login')
  .post(auth.loginUser)

export default router