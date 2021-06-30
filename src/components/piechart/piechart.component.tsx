import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

import * as IF from "../../interface";

interface IProps {
	data: Array<IF.IData>;
}

const PieChart: React.FC<IProps> = ({ data }) => {
	const [count, setCount] = useState({ M: 0, F: 0 });

	useEffect(() => {
		let M = 0;
		let F = 0;

		data.forEach(({ gender }) => {
			gender === "M" ? M++ : gender === "F" ? F++ : undefined;
		});

		setCount({ M, F });
	}, [data]);

	return (
		<div className="chart">
			<Pie
				type={"pie"}
				data={{
					labels: ["Male", "Female"],
					datasets: [
						{
							label: "Ratio of M and F",
							data: [count.M, count.F],
							backgroundColor: ["rgba(54, 162, 235, 0.8)", "rgba(255, 99, 132, 0.8)"],
							hoverOffset: 4,
						},
					],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
				}}
				height={350}
				width={350}
			/>
		</div>
	);
};

export default PieChart;
