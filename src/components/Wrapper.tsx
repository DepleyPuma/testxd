export function Wrapper({ children }: { children: React.ReactNode }) {
	return <div className='w-full max-w-[1200px] mx-auto my-0'>{children}</div>;
}
