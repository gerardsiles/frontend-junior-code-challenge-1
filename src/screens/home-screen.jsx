import React, { useState } from 'react';
import Papa from 'papaparse';
import csvFile from '../assets/Artikel.csv';
import { LinearProgress } from '@mui/material';
import { useGlobalState } from '../context/store';

import GraphScreen from './graph-screen';
import TableScreen from './table-screen';
import Footer from '../components/footer';
import AboutMe from '../components/about-me';

function Home() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [state, dispatch] = useGlobalState();

	// Parse local CSV file
	const handleLocalParse = () => {
		setLoading(true);
		Papa.parse(csvFile, {
			download: true,
			header: true,
			complete: results => {
				// Initialize data
				// dispatch({ data: results.data.forEach(item => state.data.push(item)) });
				setData(results.data);
				console.log(data);
				setLoading(false);
			},
			error: (error, file) => {
				alert('Error while parsing:', error, file);
				setLoading(false);
			},
		});
	};

	return (
		<div className='flex flex-col content-center items-center '>
			<div className=''>
				<h3 className='text-3xl font-bold underline text-center'>CSV Parser</h3>

				{/* Parse local CSV */}
				{!data.length && (
					<button
						onClick={handleLocalParse}
						className='bg-blue-500 hove:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 '
					>
						Parse local CSV
					</button>
				)}
			</div>

			{/* Charts Screen */}
			<div className={'w-4/5 h-xl bg-white mt-5'}>
				{/* Progress Spinner */}
				{loading && <LinearProgress />}
				{/* Load AboutMe if no data */}
				{!data.length && <AboutMe />}
				{/* Load data if exists */}
				{data.length > 0 && <GraphScreen data={data} />}
			</div>

			{/* Table Screen */}
			{data.length > 0 && <TableScreen data={data} />}

			{/* Download Result */}
			<div className='flex flex-row content-center items-center mt-5'>
				<Footer />
			</div>
		</div>
	);
}
export default Home;
