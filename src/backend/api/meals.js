const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  let meals = knex("meals");

  if (request.query.title) {
    meals = meals.where('title', 'like', `%${request.query.title}%`)
  }
  if (request.query.maxPrice) {
    meals = meals.where('price', '<=', parseInt(request.query.maxPrice))
  }
  if (request.query.limit) {
    meals = meals.limit(parseInt(request.query.limit))
  }
  if (request.query.createdAfter) {
    meals = meals.where('created_date', '>', request.query.createdAfter)
  }
  if (request.query.maxReservationsAvailable) {
    meals = meals.where('max_reservations', '>', request.query.maxReservationsAvailable)
  }

  return response.json(await meals);
});

router.get("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where('id', parseInt(request.params.id));
    response.json(meals);
  } catch (e) {
    throw e;
  }
});

router.post("/", async (request, response) => {
  try {
    await knex("meals").insert(request.body);
    response.send('meal adding success');
  } catch (e) {
    throw e;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where('id', parseInt(request.params.id)).update(request.body);
    response.json(meals);
  } catch (e) {
    throw e;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where('id', parseInt(request.params.id)).del();
    response.json(meals);
  } catch (e) {
    throw e;
  }
});

module.exports = router;
