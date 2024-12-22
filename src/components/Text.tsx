import { FadeText } from './ui/fade-text';

export function Text() {
	return (
		<div className='flex flex-wrap justify-center items-end space-x-3'>
			<FadeText
				className='text-4xl font-bold text-white dark:text-white md:text-6xl'
				direction='up'
				framerProps={{
					show: { transition: { delay: 0.7 } },
				}}
				text='Mam'
			/>
			<FadeText
				className='text-4xl font-bold text-[#E60345] dark:text-white md:text-7xl'
				direction='up'
				framerProps={{
					show: { transition: { delay: 0.9 } },
				}}
				text='bardzo'
			/>
			<FadeText
				className='text-4xl font-bold text-white dark:text-white md:text-6xl'
				direction='up'
				framerProps={{
					show: { transition: { delay: 1.2 } },
				}}
				text='ważne'
			/>
			<FadeText
				className='text-4xl font-bold text-white dark:text-white md:text-6xl'
				direction='up'
				framerProps={{
					show: { transition: { delay: 1.6 } },
				}}
				text='pytanie'
			/>
		</div>
	);
}
