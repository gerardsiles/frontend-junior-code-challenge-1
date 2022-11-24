import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Papa from 'papaparse';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';
import Table from '../components/table-component';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useGlobalState } from '../context/store';

const style = {
	overflow: 'scroll',
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	height: 600,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	gap: 4,
};

function TableScreen({ data }) {
	const [state, dispatch] = useGlobalState();
	const [tabData, setTabData] = useState([]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// Form controll
	const [Hauptartikelnr, setHauptartikelnr] = useState(0);
	const [Artikelname, setArtikelname] = useState('');
	const [Hersteller, setHersteller] = useState('');
	const [Beschreilbung, setBeschreilbung] = useState('');
	const [Materialangaben, setMaterialangaben] = useState('');
	const [Geschlecht, setGeschlecht] = useState('');
	const [Produktart, setProduktart] = useState('');
	const [Ärmel, setÄrmel] = useState('');
	const [Bein, setBein] = useState('');
	const [Kragen, setKragen] = useState('');
	const [Herstellung, setHerstellung] = useState('');
	const [Taschenart, setTaschenart] = useState('');
	const [Grammatur, setGrammatur] = useState('');
	const [Material, setMaterial] = useState('');
	const [Ursprungsland, setUrsprungsland] = useState('');
	const [Bildname, setBildname] = useState('');

	useEffect(() => {
		setTabData(data);
		console.log(tabData);
	}, [data, setTabData]);

	const handleAddData = () => {
		setHauptartikelnr((state.id += 1));

		const newItem = {
			Hauptartikelnr,
			Artikelname,
			Hersteller,
			Beschreilbung,
			Materialangaben,
			Geschlecht,
			Produktart,
			Ärmel,
			Bein,
			Kragen,
			Herstellung,
			Taschenart,
			Grammatur,
			Material,
			Ursprungsland,
			Bildname,
		};
		setTabData(items => [...items, newItem]);
		console.log(tabData);
		handleClose();
		setArtikelname('');
	};

	const handleDownload = ({ data, fileName, fileType }) => {
		const blob = new Blob([data], { type: fileType });
		const a = document.createElement('a');
		a.download = fileName;
		a.href = window.URL.createObjectURL(blob);
		const clickEvt = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true,
		});
		a.dispatchEvent(clickEvt);
		a.remove();
	};

	const exportCSV = e => {
		e.preventDefault();

		var Artikel = Papa.unparse(tabData, {
			quotes: false,
			quoteChar: '"',
			escapeChar: '"',
			delimiter: ';',
			header: true,
			newline: '\r\n',
		});

		handleDownload({
			data: [...Artikel].join('\n'),
			fileName: 'Artikel.csv',
			fileType: 'text/csv',
		});
	};
	return (
		<Box
			className={
				'flex flex-col w-4/5 h-xxl mt-10 justify-center items-center bg-white '
			}
		>
			<h3 className='text-center font-bold text-2xl mt-1'>
				Table Data Visualization
			</h3>

			<p>
				To unselect a row hold{' '}
				<kbd
					className='p-1 inline flex-nowrap m-1 decoration-slate-300 bg-slate-300 rounded'
					style={{
						border: '1px solid #CDD2D7',
						boxShadow: 'inset 0 -1 #CDD2D7',
					}}
				>
					cntrl
				</kbd>{' '}
				key and click on the row
			</p>
			<p>(unselect before exporting)</p>
			<Button onClick={handleOpen}>Add item</Button>
			<Button onClick={exportCSV}>Download raw CSV</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style} autoComplete='off'>
						<h3 className='text-center font-bold text-2xl mt-1'>
							Fill in the fields
						</h3>
						<TextField
							onChange={e => setArtikelname(e.target.value)}
							id='Artikelname'
							label='Artikelname'
							variant='outlined'
						/>
						<TextField
							onChange={e => setHersteller(e.target.value)}
							id='Hersteller'
							label='Hersteller'
							variant='outlined'
						/>
						<TextField
							onChange={e => setBeschreilbung(e.target.value)}
							id='Beschreilbung'
							label='Beschreilbung'
							variant='outlined'
						/>
						<TextField
							onChange={e => setMaterialangaben(e.target.value)}
							id='Materialangaben'
							label='Materialangaben'
							variant='outlined'
						/>
						<TextField
							onChange={e => setGeschlecht(e.target.value)}
							id='Geschlecht'
							label='Geschlecht'
							variant='outlined'
						/>
						<TextField
							onChange={e => setProduktart(e.target.value)}
							id='Produktart'
							label='Produktart'
							variant='outlined'
						/>
						<TextField
							onChange={e => setÄrmel(e.target.value)}
							id='Ärmel'
							label='Ärmel'
							variant='outlined'
						/>
						<TextField
							onChange={e => setBein(e.target.value)}
							id='Bein'
							label='Bein'
							variant='outlined'
						/>
						<TextField
							onChange={e => setKragen(e.target.value)}
							id='Kragen'
							label='Kragen'
							variant='outlined'
						/>
						<TextField
							onChange={e => setHerstellung(e.target.value)}
							id='Herstellung'
							label='Herstellung'
							variant='outlined'
						/>
						<TextField
							onChange={e => setTaschenart(e.target.value)}
							id='Taschenart'
							label='Taschenart'
							variant='outlined'
						/>
						<TextField
							onChange={e => setGrammatur(e.target.value)}
							id='Grammatur'
							label='Grammatur'
							variant='outlined'
						/>
						<TextField
							onChange={e => setMaterial(e.target.value)}
							id='Material'
							label='Material'
							variant='outlined'
						/>
						<TextField
							onChange={e => setUrsprungsland(e.target.value)}
							id='Ursprungsland'
							label='Ursprungsland'
							variant='outlined'
						/>
						<TextField
							onChange={e => setBildname(e.target.value)}
							id='Bildname'
							label='Bildname'
							variant='outlined'
						/>
						<Button
							onClick={handleAddData}
							variant='contained'
							endIcon={<SendIcon />}
						>
							Submit
						</Button>
					</Box>
				</Fade>
			</Modal>
			<Table data={data} />
		</Box>
	);
}
export default TableScreen;
