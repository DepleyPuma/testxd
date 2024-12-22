import { Text } from '@/components/Text';
import { Wrapper } from '@/components/Wrapper';
import EMOJI from '../assets/yellow-emoji.png';
import { Button } from '@/components/ui/button';
import { BsChatHeartFill } from 'react-icons/bs';
import { FadeText } from '@/components/ui/fade-text';

type StartPageProps = {
	onClick: () => void;
};

export function StartPage({ onClick }: StartPageProps) {
	const myLove: string = 'Gabi';
	return (
		<div className='bg-[#F391A6] overflow-hidden'>
			<Wrapper>
				<div className='flex flex-col justify-center items-center min-h-screen'>
					<h1 className='flex gap-4 text-7xl font-bold uppercase text-white'>
						{myLove}{' '}
						<span>
							<BsChatHeartFill className='text-[#c7506a]' />
						</span>
					</h1>
					<Text />

					<FadeText
						className='text-4xl font-bold text-white dark:text-white md:text-6xl'
						direction='up'
						framerProps={{
							show: { transition: { delay: 2 } },
						}}
						text={<img className='w-48 lg:w-96' src={EMOJI} alt='emoji' />}
					/>

					<FadeText
						className='text-4xl font-bold text-white dark:text-white md:text-6xl'
						direction='up'
						framerProps={{
							show: { transition: { delay: 2 } },
						}}
						text={
							<Button
								onClick={onClick}
								className='px-12 py-6 bg-[#E60345] hover:bg-[#ff1356] hover:drop-shadow-[0_0_10px_#b40033] hover:scale-110 transition-all duration-300'
							>
								DALEJ
							</Button>
						}
					/>
				</div>
			</Wrapper>
		</div>
	);
}
