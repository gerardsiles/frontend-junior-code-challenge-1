import React from 'react';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' height='80%'>
			<BarChart
				width={300}
				height={200}
				data={data}
				margin={{
					top: 0,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				barSize={20}
			>
				<XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
				<YAxis />
				<Tooltip />
				<Legend />
				<CartesianGrid strokeDasharray='3 3' />
				<Bar dataKey='amount' fill='#8884d8' />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BarChartComponent;
