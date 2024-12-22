import { Button } from '@/components/ui/button';
import { FadeText } from '@/components/ui/fade-text';
import PulsatingButton from '@/components/ui/pulsating-button';
import Ripple from '@/components/ui/ripple';
import { Wrapper } from '@/components/Wrapper';
import BIG_HEART from '../assets/big-heart.png';
import HEART_ICON from '../assets/heart.png';
import WAVE from '../assets/wave.svg';

type QuestionPageProps = {
	nextStep: () => void;
};

export function QuestionPage({ nextStep }: QuestionPageProps) {
	return (
		<div className='flex justify-center items-center min-h-screen overflow-hidden bg-[#fff]'>
			<Wrapper>
				<div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
					<img
						className='max-w-[400px] animate-zoomIn opacity-0 delay-1100 fill-mode-forwards md:max-w-[800px]'
						src={BIG_HEART}
						alt=''
					/>
					<h1 className='absolute top-1/2 left-1/2 text-xl text-center font-bold text-white drop-shadow-xl -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fadeIn delay-1400 fill-mode-forwards md:text-4xl'>
						Zostaniesz moją walentynką?
					</h1>
				</div>
				<div className='absolute bottom-36 left-1/2 flex justify-center items-end space-x-16 -translate-x-1/2 z-50'>
					<FadeText
						direction='up'
						framerProps={{
							show: { transition: { delay: 2.2 } },
						}}
						text={
							<PulsatingButton
								onClick={nextStep}
								className='bg-[#ff1356] px-8 py-3 hover:scale-125 transition-transform duration-300'
								pulseColor='#b40033'
							>
								TAK
							</PulsatingButton>
						}
					/>
					<FadeText
						direction='up'
						framerProps={{
							show: { transition: { delay: 2.4 } },
						}}
						text={
							<Button
								className={
									'bg-[#E60345] px-8 py-6 hover:bg-[#943e56] hover:cursor-not-allowed'
								}
							>
								NIE
							</Button>
						}
					/>
				</div>
				<div className='hidden md:block'>
					<img
						className={`absolute top-[50px] left-1/2 w-[100px] -rotate-[11deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-700 opacity-0 fill-mode-forwards -translate-x-1/2`}
						src={HEART_ICON}
						alt='heart'
					/>
					<img
						className={`absolute top-[80px] left-[450px] w-[100px] -rotate-[20deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-500 opacity-0 fill-mode-forwards`}
						src={HEART_ICON}
						alt='heart'
					/>
					<img
						className={`absolute top-[300px] left-[300px] w-[120px] rotate-[10deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-1200 opacity-0 fill-mode-forwards`}
						src={HEART_ICON}
						alt='heart'
					/>
					<img
						className={`absolute top-[500px] left-[600px] w-[130px] rotate-[10deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-700 opacity-0 fill-mode-forwards`}
						src={HEART_ICON}
						alt='heart'
					/>
					<img
						className={`absolute top-[80px] left-[1350px] w-[100px] rotate-[20deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-1400 opacity-0 fill-mode-forwards`}
						src={HEART_ICON}
						alt='heart'
					/>
					<img
						className={`absolute top-[300px] left-[1400px] w-[120px] -rotate-[10deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-300 opacity-0 fill-mode-forwards`}
						src={HEART_ICON}
						alt='heart'
					/>
					<img
						className={`absolute top-[500px] left-[1200px] w-[130px] -rotate-[10deg] drop-shadow-[0_0_3px_#a50230] z-10 animate-fadeIn delay-1000 opacity-0 fill-mode-forwards`}
						src={HEART_ICON}
						alt='heart'
					/>
				</div>
			</Wrapper>
			<div className='absolute flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background'>
				<Ripple />
			</div>
			<img className='absolute w-full bottom-0 animate-fadeInUp' src={WAVE} alt='' />
		</div>
	);
}
