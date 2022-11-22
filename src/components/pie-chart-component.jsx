import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import CharCard from './char-card';

const renderActiveShape = props => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';
	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill='#333'
			>{`PV ${value}`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill='#999'
			>
				{`(Rate ${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

const setPieAverage = data => {
	let average = [
		{ name: 'Herren', value: 0 },
		{ name: 'Damen', value: 0 },
		{ name: 'Kinder', value: 0 },
		{ name: 'Babies', value: 0 },
		{ name: 'Undefined', value: 0 },
	];

	let result = data.map(element => {
		if (element.Geschlecht === 'Herren') {
			average[0].value++;
		} else if (element.Geschlecht === 'Damen') {
			average[1].value += 1;
		} else if (element.Geschlecht === 'Kinder') {
			average[2].value += 1;
		} else if (element.Geschlecht === 'Babies') {
			average[3].value += 1;
		} else {
			average[4].value += 1;
		}
	});
	return average;
};

const PieChartComponent = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [result, setResult] = useState([]);

	useState(state => {
		setResult(setPieAverage(data));
	});

	const onPieEnter = (_, index) => {
		setActiveIndex(index);
	};
	return (
		<ResponsiveContainer width='100%' height='80%'>
			<PieChart width={400} height={400}>
				<Pie
					activeIndex={activeIndex}
					activeShape={renderActiveShape}
					data={result}
					cx='50%'
					cy='50%'
					innerRadius={60}
					outerRadius={80}
					fill='#8884d8'
					dataKey='value'
					onMouseEnter={onPieEnter}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};
export default PieChartComponent;