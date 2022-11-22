import { useState, useEffect } from 'react';

import PieChartComponent from './pie-chart-component';
import BarChartComponent from './bar-chart-component';

import Stack from '@mui/material/Stack';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';

function GraphComponent({ data }) {
	const [graph, setGraph] = useState('');
	const [graphData, setGraphData] = useState([]);

	const handleGraph = (event, newGraph) => {
		setGraph(newGraph);
	};

	useEffect(() => {
		let total = [
			{ name: 'Herren', amount: 0 },
			{ name: 'Damen', amount: 0 },
			{ name: 'Kinder', amount: 0 },
			{ name: 'Babies', amount: 0 },
			{ name: 'Undefined', amount: 0 },
		];

		data.map(element => {
			if (element.Geschlecht === 'Herren') {
				total[0].amount++;
			} else if (element.Geschlecht === 'Damen') {
				total[1].amount += 1;
			} else if (element.Geschlecht === 'Kinder') {
				total[2].amount += 1;
			} else if (element.Geschlecht === 'Babies') {
				total[3].amount += 1;
			} else {
				total[4].amount += 1;
			}
		});
		return setGraphData(total);
	}, [setGraphData]);

	return (
		<div className='flex flex-col content-center items-center '>
			<h3 className='text-center font-bold text-2xl mt-1'>
				Graph Representations
			</h3>
			<Stack
				direction='column'
				style={{ justifyContent: 'center' }}
				divider={<Divider orientation='horizontal' flexItem />}
			>
				<Stack
					style={{
						paddingTop: 10,
						paddingBottom: 15,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ToggleButtonGroup
						value={graph}
						exclusive
						onChange={handleGraph}
						aria-label='Graph Selection'
					>
						<ToggleButton value='pie' aria-label='pie'>
							<PieChartIcon />
						</ToggleButton>
						<ToggleButton value='bar' aria-label='bar'>
							<BarChartIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Stack>

				{/* Chart Area */}
				<Stack
					style={{
						height: '400px',
						width: '400px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{graph === 'pie' && <PieChartComponent data={graphData} />}
					{graph === 'bar' && <BarChartComponent data={graphData} />}
				</Stack>
			</Stack>
		</div>
	);
}
export default GraphComponent;
