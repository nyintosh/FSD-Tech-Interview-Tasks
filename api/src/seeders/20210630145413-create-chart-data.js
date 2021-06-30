"use strict";

const fs = require("fs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const dummyData = fs.readFileSync(__dirname + "/data.json");
		await queryInterface.bulkInsert("charts", JSON.parse(dummyData.toString()), {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("charts", null, {});
	},
};
