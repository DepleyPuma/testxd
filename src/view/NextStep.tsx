import { FadeText } from '@/components/ui/fade-text';
import { Wrapper } from '@/components/Wrapper';
import { IoArrowDownCircleOutline } from 'react-icons/io5';
import SMILING_EMOJI from '../assets/smiling-emoji.png';
import { Button } from '@/components/ui/button';

const dateIdeas = [
	'Romantyczna kolacja 🌹',
	'Wspólne siedzienie w domu 🏠',
	'Spacer we dwójkę 👫',
	'Wspólny wyjazd 🚞',
];

export function NextStep() {
	return (
		<>
			<div className='min-h-screen bg-[#F391A6]'>
				<Wrapper>
					<div className='flex flex-col justify-center items-center min-h-screen space-y-8'>
						<div className='flex flex-wrap justify-center items-end space-x-3'>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 0.7 } },
								}}
								text='Bardzo'
							/>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 0.9 } },
								}}
								text='się'
							/>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 1.2 } },
								}}
								text='cieszę'
							/>
						</div>
						<div className='flex flex-wrap justify-center items-end space-x-3'>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 1.4 } },
								}}
								text='Czas'
							/>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 1.6 } },
								}}
								text='na'
							/>
							<FadeText
								className='text-4xl font-bold text-[#E60345] dark:text-white md:text-7xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 1.8 } },
								}}
								text='kolejny'
							/>
							<FadeText
								className='text-4xl font-bold text-[#E60345] dark:text-white md:text-7xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 2 } },
								}}
								text='krok'
							/>
						</div>
						<div>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 2.2 } },
								}}
								text={
									<img className='w-48 lg:w-64' src={SMILING_EMOJI} alt='emoji' />
								}
							/>
						</div>
						<div className='pt-12'>
							<FadeText
								className='text-4xl font-bold text-white dark:text-white md:text-6xl'
								direction='up'
								framerProps={{
									show: { transition: { delay: 2.4 } },
								}}
								text={
									<a href='#form' className='cursor-pointer'>
										<IoArrowDownCircleOutline className='text-6xl text-white animate-bounce' />
									</a>
								}
							/>
						</div>
					</div>
				</Wrapper>
			</div>
			<div className='flex justify-center items-center min-h-screen bg-[#F391A6]'>
				<Wrapper>
					<div className='p-4 rounded-lg shadow-xl text-white' id='form'>
						<h2 className='text-center text-4xl font-bold'>
							Jak chesz spędzić wspólnie walentyki?
						</h2>
						<form
							action='https://formsubmit.co/d0081bff9b04060df3824185a072f316'
							method='POST'
							className='flex flex-col mt-10 space-y-4'
						>
							{dateIdeas.map((idea, index) => (
								<div
									key={index}
									className='flex justify-start items-center space-x-4'
								>
									<input
										type='radio'
										id={`${index}`}
										name={'option' + { index }}
									/>
									<label htmlFor={`${index}`} className='text-xl'>
										{idea}
									</label>
								</div>
							))}

							<input type='hidden' name='_captcha' value='false' />

							<div className='self-center pt-12'>
								<Button
									type='submit'
									className=' px-12 py-6 w-[600px] bg-[#E60345] hover:bg-[#ff1356] hover:drop-shadow-[0_0_10px_#b40033] hover:scale-110 transition-all duration-300'
								>
									Wyślij
								</Button>
							</div>
						</form>
					</div>
				</Wrapper>
			</div>
		</>
	);
}
