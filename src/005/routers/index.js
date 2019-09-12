const Router = require('koa-router');
const router = new Router();
const { companyCtrl } = require('../controllers');
// define routes
router.post('/companies',companyCtrl.create);
module.exports = router;