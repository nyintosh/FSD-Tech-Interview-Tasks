import React, { useEffect, useState } from "react";

import * as ME from "./interface";

import JSON from "./assets/data.json";
import PieChart from "./components/piechart/piechart.component";
import BarChart from "./components/barchart/barchart.component";
import "./App.scss";

const App: React.FC = () => {
	const [data, setData] = useState<Array<ME.IData>>([]);
	useEffect(() => setData(JSON), []);

	return (
		<section className="visualizer">
			<div className="chart-container">
				<PieChart data={data} />
				<BarChart data={data} />
			</div>
		</section>
	);
};

export default App;
