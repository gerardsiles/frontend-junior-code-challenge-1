import React, { useState } from 'react';
import Papa from 'papaparse';
import csvFile from '../assets/Artikel.csv';
import Table from '../components/table-component';
import CircularProgress from '@mui/material/CircularProgress';
import GraphComponent from '../components/graph-component';
import Footer from '../components/footer';
import AboutMe from '../components/about-me';

function Home() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	// Parse local CSV file
	const handleLocalParse = () => {
		setLoading(true);
		Papa.parse(csvFile, {
			download: true,
			header: true,
			complete: results => {
				setData(results.data);
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
				<button
					onClick={handleLocalParse}
					className='bg-blue-500 hove:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 '
				>
					Parse local CSV
				</button>
			</div>

			{/* Render Charts */}
			<div className={'w-4/5 h-xl bg-white '}>
				{/* Progress Spinner */}
				{loading && <CircularProgress />}
				{/* Load AboutMe if no data */}
				{!data.length && <AboutMe />}
				{/* Load data if exists */}
				{data.length > 0 && <GraphComponent data={data} />}
			</div>

			{/* Render Table */}
			{data.length > 0 && (
				<div
					className={
						'flex flex-col w-4/5 h-xl mt-10 justify-center items-center bg-white '
					}
				>
					<h3 className='text-center font-bold text-2xl mt-1'>
						Table Data Visualization
					</h3>

					<Table data={data} />
				</div>
			)}

			{/* Download csv icon https://icons8.com/icons/set/csv-file */}
			{/* Download Result */}
			<div className='flex flex-row content-center items-center mt-5'>
				<Footer />
			</div>
		</div>
	);
}
export default Home;
