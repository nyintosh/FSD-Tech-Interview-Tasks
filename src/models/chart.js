"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Chart extends Model {
		static associate(models) {}
	}
	Chart.init(
		{
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
		},
		{
			sequelize,
			modelName: "Chart",
			tableName: "charts",
			timestamps: false,
		}
	);
	return Chart;
};
