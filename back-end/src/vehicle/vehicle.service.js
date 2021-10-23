const Vehicle = require('./vehicle.model');

const postVehicle = async ctx => {
  try {
    const vehicleExists = !!(await Vehicle.findOne({
      chassi: ctx.request.body.chassi
    }));

    if (vehicleExists) {
      ctx.response.status = 403;
      throw new Error('Vehicle already exists');
    }

    const vehicle = new Vehicle(ctx.request.body);
    await vehicle.save();
    ctx.response.status = 201;
    ctx.body = { vehicle };
  } catch (err) {
    ctx.body = err.message;
  }
};

const putVehicle = async ctx => {
  try {
    const { id } = ctx.params;
    const vehicle = await Vehicle.findOneAndUpdate(
      { _id: id },
      { ...ctx.request.body },
      { new: true }
    );
    ctx.body = { vehicle };
  } catch (err) {
    ctx.body = err.message;
  }
};

const removeVehicle = async ctx => {
  try {
    const { id } = ctx.params;
    await Vehicle.findByIdAndDelete(id);
    ctx.response.status = 204;
  } catch (err) {
    ctx.body = err.message;
  }
};

const getVehicles = async ctx => {
  try {
    const vehicles = await Vehicle.find();
    ctx.body = vehicles;
  } catch (err) {
    ctx.body = err.message;
  }
};

const getVehicle = async ctx => {
  try {
    const vehicle = await Vehicle.findById(ctx.params.id);
    ctx.body = { vehicle };
  } catch (err) {
    ctx.body = err.message;
  }
};

module.exports = { getVehicles, getVehicle, postVehicle, putVehicle, removeVehicle };
