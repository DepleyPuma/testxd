import { useState } from 'react';
import { StartPage } from './view/StartPage';
import { QuestionPage } from './view/QuestionPage';
import { NextStep } from './view/NextStep';

export default function App() {
	const [progressCount, setProgressCount] = useState<number>(0);

	const nextStep = () => {
		setProgressCount(prevCount => prevCount + 1);
	};

	const actuallPage = () => {
		switch (progressCount) {
			case 0:
				return <StartPage onClick={nextStep} />;
			case 1:
				return <QuestionPage nextStep={nextStep} />;
			case 2:
				return <NextStep />;
		}
	};

	return actuallPage();
}
