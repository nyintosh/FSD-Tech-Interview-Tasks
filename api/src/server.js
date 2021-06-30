"use strict";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const chalk = require("chalk");
const { Op } = require("sequelize");

const { sequelize, Chart } = require("./models");

const PORT = process.env.PORT | 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/pie", async (req, res) => {
	try {
		const M = await Chart.count({
			where: {
				gender: "M",
			},
		});
		const F = await Chart.count({
			where: {
				gender: "F",
			},
		});

		res.send({ M, F });
	} catch (e) {
		res.send({ error: e.message });
	}
});

app.get("/api/bar", async (req, res) => {
	try {
		const Y = await Chart.count({
			where: {
				age: { [Op.and]: { [Op.gte]: 0, [Op.lte]: 35 } },
			},
		});
		const A = await Chart.count({
			where: {
				age: { [Op.and]: { [Op.gte]: 36, [Op.lte]: 50 } },
			},
		});
		const S = await Chart.count({
			where: {
				age: { [Op.gte]: 51 },
			},
		});

		res.send({ Y, A, S });
	} catch (e) {
		res.send({ error: e.message });
	}
});

app.post("/api/chart", async (req, res) => {
	try {
		const chart = await Chart.create(req.body);
		res.send(chart);
	} catch (e) {
		res.send({ error: e });
	}
});

app.get("/api/chart", async (req, res) => {
	try {
		const charts = await Chart.findAll();
		res.send(charts);
	} catch (e) {
		res.send({ error: e.message });
	}
});

app.listen(PORT, async () => {
	try {
		await sequelize.authenticate();
		console.log(chalk.green("[api] Connected to database."));
	} catch (error) {
		console.log(chalk.red("[api] Database connection failed!"));
		console.log(error.message);
		process.exit(1);
	}

	console.log(`http://127.0.0.1:${PORT}`);
});
