const express = require("express");
const router = express.Router();
const knex = require("../database");

// router.get("/", async (request, response) => {
//   try {
//     const titles = await knex("meals").select("title");
//     response.json(titles);
//   } catch (e) {
//     throw e;
//   }
// });

router.post("/", async (request, response) => {
  try {
    const meals = await knex("meals").insert(request.body);
    response.send('meal adding success');
  } catch (e) {
    throw e;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const meals = await knex("meals").where('id', parseInt(request.params.id));
    response.json(meals);
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

router.get("/", async (request, response) => {
  const query = request.query
  console.log(request.query)
  if (Object.keys(query).length == 0) {
    const meals = await knex("meals");
    return response.json(meals);
  }
  if (request.query.maxPrice && !isNaN(parseInt(request.query.maxPrice)) && request.query.limit) {
    const meals = await knex("meals").where('price', '<=', parseInt(request.query.maxPrice)).limit(parseInt(request.query.limit))
    return response.json(meals);
  }
  if (request.query.maxPrice && !isNaN(parseInt(request.query.maxPrice))) {
    const meals = await knex("meals").where('price', '<=', parseInt(request.query.maxPrice))
    return response.json(meals);
  }
  else if (request.query.title) {
    const meals = await knex("meals").where('title', 'like', `%${request.query.title}%`)
    return response.json(meals);
  }
  else if (request.query.createdAfter && isNaN(Date.parse(request.query.createdAfter))) {
    const meals = await knex("meals").where('created_date', '>', request.query.createdAfter)
    return response.json(meals);
  }
  else if (request.query.limit) {
    const meals = await knex("meals").limit(parseInt(request.query.limit))
    return response.json(meals);
  }
  else if (request.query.availableReservations) {
    const meals = await knex("meals").join('reservation', { 'meal.id': 'Reservation.meal_id' })
      .select('meal.id', 'meal.title', "meal.when", 'meal.max_reservations  as All_reservations',
        knex.raw(
          'meal.max_reservations - sum(Reservation.number_of_guests) as "available_reservations"',
        ))
      .sum('Reservation.number_of_guests as reservations_placed')
      .having('meal.max_reservations', '>', "sum('reservation.number_of_guests')")
      .groupBy('reservation.meal_id');
    return response.json(meals);
  }
  else {
    return response.status(404).send("no data found")
  }
});

module.exports = router;

