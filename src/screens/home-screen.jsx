import React, { useState } from 'react';
import Papa from 'papaparse';
import csvFile from '../assets/Artikel.csv';
import Table from '../components/table-component';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

// Allowed extensions for input file
const allowedExtensions = ['csv'];

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
			<h3 className='text-3xl font-bold underline text-center'>CSV Parser</h3>

			{/* Parse local CSV */}
			<button onClick={handleLocalParse} className='m-5'>
				Parse local CSV
			</button>

			{data.length > 0 && <Table data={data} />}

			{/* Download csv icon https://icons8.com/icons/set/csv-file */}
		</div>
	);
}
export default Home;
