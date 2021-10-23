const KoaRouter = require('koa-router');
const {
  getVehicles,
  getVehicle,
  postVehicle,
  putVehicle,
  removeVehicle
} = require('./vehicle.service');

const router = KoaRouter({
  prefix: '/api/vehicles'
});

router.get('/', getVehicles);
router.get('/:id', getVehicle);
router.post('/', postVehicle);
router.put('/:id', putVehicle);
router.delete('/:id', removeVehicle);

module.exports = router;
