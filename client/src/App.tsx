import React, { useEffect, useState } from "react";
import axios from "axios";

import * as ME from "./interface";

import PieChart from "./components/piechart/piechart.component";
import BarChart from "./components/barchart/barchart.component";
import EntryForm from "./components/form/form.component";
import "./App.scss";

const App: React.FC = () => {
	const [data, setData] = useState<Array<ME.IData>>([]);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get("http://localhost:5000/api/chart");
				setData(data);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		})();
	}, []);

	const toggleForm = () => {
		document.querySelector(".form-container")?.classList.toggle("disabled");
		document.querySelector(".visualizer")?.classList.toggle("disabled");
		document.querySelector("#fab")?.classList.toggle("active");
	};

	return (
		<>
			<EntryForm setData={setData} toggleForm={toggleForm} />
			<section className="visualizer">
				<div className="chart-container">
					<PieChart data={data} />
					<BarChart data={data} />
				</div>
			</section>
			<button id="fab" onClick={toggleForm}>
				+
			</button>
		</>
	);
};

export default App;
