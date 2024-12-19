import { FadeTextDemo } from './components/FadeInText';
import { Button } from './components/ui/button';

export default function App() {
	return (
		<>
			<div>Hello world</div>
			<div>
				<Button className='large'>Click me</Button>
			</div>
			<div>
				<FadeTextDemo />
			</div>
		</>
	);
}
