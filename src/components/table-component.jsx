import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState, useMemo } from 'react';

const Table = ({ data }) => {
	const columns = useMemo(
		() => [
			{ field: 'Hauptartikelnr', headerName: 'Hauptartikelnr' },
			{ field: 'Artikelname', headerName: 'Artiklename' },
			{ field: 'Hersteller', headerName: 'Hersteller' },
			{ field: 'Beschreilbung', headerName: 'Beschreilbung' },
			{ field: 'Materialangaben', headerName: 'Materialangaben' },
			{ field: 'Geschlecht', headerName: 'Geschlecht' },
			{ field: 'Produktart', headerName: 'Produktart' },
			{ field: 'Armel', headerName: 'Armel' },
			{ field: 'Bein', headerName: 'Bein' },
			{ field: 'Kragen', headerName: 'Kragen' },
			{ field: 'Herstellung', headerName: 'Herstellung' },
			{ field: 'Taschenart', headerName: 'Taschenart' },
			{ field: 'Grammatur', headerName: 'Grammatur' },
			{ field: 'Material', headerName: 'Material' },
			{ field: 'Ursprungsland', headerName: 'Ursprungsland' },
			{ field: 'Bildname', headerName: 'Bildname' },
		],
		[]
	);
	const [size, setSize] = useState(10);
	return (
		<Box sx={{ height: 400, width: '100%' }}>
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
