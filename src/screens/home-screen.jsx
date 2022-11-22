import React, { useState } from 'react';
import Papa from 'papaparse';
import csvFile from '../assets/Artikel.csv';
import Table from '../components/table-component';

function Home() {
	const [data, setData] = useState([]);

	// Parse local CSV file
	const handleLocalParse = () => {
		Papa.parse(csvFile, {
			download: true,
			header: true,
			complete: results => {
				setData(results.data);
			},
			error: (error, file) => {
				alert('Error while parsing:', error, file);
			},
		});
	};

	return (
		<div className=''>
			<div className='flex-1'>
				<h3 className='text-3xl font-bold underline text-center'>CSV Parser</h3>

				{/* Parse local CSV */}
				<button
					onClick={handleLocalParse}
					className='bg-blue-500 hove:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 '
				>
					Parse local CSV
				</button>
			</div>

			{/* Render Table if there's data to be shown */}
			{data.length > 0 && <Table data={data} />}

			{/* Download csv icon https://icons8.com/icons/set/csv-file */}
		</div>
	);
}
export default Home;
