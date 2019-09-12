const Router = require('koa-router');
const router = new Router();
const { companyCtrl } = require('../controllers');
// define routes
router.post('/companies',companyCtrl.create);
router.get('/companies',companyCtrl.find);
router.get('/companies/:id',companyCtrl.findOne);
router.delete('/companies/:id',companyCtrl.delete);
module.exports = router;