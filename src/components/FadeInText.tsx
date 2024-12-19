import { FadeText } from './ui/fade-text';

export function FadeTextDemo() {
	return (
		<div className='flex justify-center items-center space-x-3'>
			<FadeText
				className='text-4xl font-bold text-red-400 dark:text-white'
				direction='up'
				framerProps={{
					show: { transition: { delay: 0.2 } },
				}}
				text='Dzień dobry'
			/>
			<FadeText
				className='text-4xl font-bold text-black dark:text-white'
				direction='up'
				framerProps={{
					show: { transition: { delay: 0.4 } },
				}}
				text='mam pytanie'
			/>
			<FadeText
				className='text-4xl font-bold text-black dark:text-white'
				direction='up'
				framerProps={{
					show: { transition: { delay: 0.6 } },
				}}
				text='odnośnie'
			/>
			<FadeText
				className='text-4xl font-bold text-black dark:text-white'
				direction='up'
				framerProps={{
					show: { transition: { delay: 1 } },
				}}
				text='jutra?'
			/>
		</div>
	);
}
