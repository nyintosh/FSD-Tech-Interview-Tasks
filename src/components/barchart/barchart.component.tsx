import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import * as IF from "../../interface";

interface IProps {
	data: Array<IF.IData>;
}

const BarChart: React.FC<IProps> = ({ data }) => {
	const [count, setCount] = useState({ Y: 0, A: 0, S: 0 });

	useEffect(() => {
		data.forEach(({ age }) => {
			if (age >= 0 && age <= 35) {
				setCount({ ...count, Y: ++count.Y });
			} else if (age > 35 && age <= 50) {
				setCount({ ...count, A: ++count.A });
			} else if (age > 50) {
				setCount({ ...count, S: ++count.S });
			}
		});
	}, [data]);

	return (
		<div className="chart">
			<Bar
				type={"bar"}
				data={{
					labels: ["Young Adults", "Adults", "Seniors"],
					datasets: [
						{
							label: "Age Group",
							data: [count.Y, count.A, count.S],
							backgroundColor: [
								"rgba(54, 162, 235, 0.65)",
								"rgba(75, 192, 192, 0.65)",
								"rgba(255, 99, 132, 0.65)",
							],
							borderColor: ["rgb(54, 162, 235)", "rgb(75, 192, 192)", "rgb(255, 99, 132)"],
							borderWidth: 1,
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

export default BarChart;
