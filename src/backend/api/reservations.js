const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
        const reservations = await knex("reservations");
        response.json(reservations);
    } catch (e) {
        throw e;
    }
});

router.get("/:id", async (request, response) => {
    try {
        const reservations = await knex("reservations").where('id', parseInt(request.params.id));
        response.json(reservations);
    } catch (e) {
        throw e;
    }
});

router.post("/", async (request, response) => {
    try {
        await knex("reservations").insert(request.body);
        response.send('it added');
    } catch (e) {
        throw e;
    }
});

router.put("/:id", async (request, response) => {
    try {
        const reservations = await knex("reservations").where('id', parseInt(request.params.id)).update(request.body);
        response.json(reservations);
    } catch (e) {
        throw e;
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const reservations = await knex("reservations").where('id', parseInt(request.params.id)).del();
        response.json(reservations);
    } catch (e) {
        throw e;
    }
});


module.exports = router;
