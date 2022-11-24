import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
export default function Footer() {
	return (
		<Link
			href='https://github.com/gerardsiles/frontend-junior-code-challenge-1/tree/master/src'
			target='_blank'
			rel='noopener'
			underline='hover'
		>
			<GitHubIcon className='m-8' />
		</Link>
	);
}
