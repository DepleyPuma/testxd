import HEART_ICON from '../assets/heart.png';

type HeartIconProps = {
	top: string;
	left: string;
	width: string;
	rotate: string;
};

export function HeartIconRight({ top, left, width, rotate }: HeartIconProps) {
	return (
		<img
			className={`absolute top-[${top}] left-[${left}] w-[${width}] rotate-[${rotate}] drop-shadow-[0_0_3px_#a50230] z-10`}
			src={HEART_ICON}
			alt='heart'
		/>
	);
}

export function HeartIconLeft({ top, left, width, rotate }: HeartIconProps) {
	return (
		<img
			className={`absolute top-[${top}] left-[${left}] w-[${width}] -rotate-[${rotate}] drop-shadow-[0_0_3px_#a50230] z-10`}
			src={HEART_ICON}
			alt='heart'
		/>
	);
}
