import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
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

function InputModal() {
	const [state, dispatch] = useGlobalState();
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

	const getLastId = () => {
		return state.data.slice(-2);
	};
	const handleAddData = () => {
		setHauptartikelnr((state.id += 1));
		dispatch({ id: (state.id += 1) });

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
		dispatch({ ...state, data: [...state.data, newItem] });
		console.log(newItem);
		console.log(state.data);
		handleClose();

		setArtikelname('');
	};
	return (
		<div>
			<Button onClick={handleOpen}>Add item</Button>
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
		</div>
	);
}
export default InputModal;
