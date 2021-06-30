"use strict";

module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.createTable("charts", {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			age: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("charts");
	},
};
