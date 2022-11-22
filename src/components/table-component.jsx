import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState, useMemo } from 'react';
import { tableColumns } from '../assets/table-columns';

const Table = ({ data }) => {
	// Avoid to rerender the header
	const columns = useMemo(() => tableColumns);
	// size of talbe results
	const [size, setSize] = useState(10);
	return (
		<Box
			sx={{
				boxShadow: 2,
				marginTop: 5,
				boder: 2,
				borderColor: 'rgb(36, 46, 185)',
				height: 400,
				width: '100%',
				backgroundColor: '#fff',
				'& .super-app-theme--header': {
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				},
			}}
		>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={size}
				getRowId={row => row.Hauptartikelnr}
				rowsPerPageOptions={[10, 30, 50]}
				onPageSizeChange={newPageSize => setSize(newPageSize)}
			/>
		</Box>
	);
};
export default Table;
