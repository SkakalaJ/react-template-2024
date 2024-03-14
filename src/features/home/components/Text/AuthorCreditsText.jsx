/** @format */

// Components
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';

const AuthorCreditsText = () => {
	return (
		<div style={{ margin: '25px auto 25px 25px', textAlign: 'center' }}>
			<FadeInOut
				action='fade-in'
				duration={2}
			>
				<div>
					<Text
						tag='a'
						href='https://github.com/SkakalaJ/react-template-2024'
						className='credits-text'
						text={
							'React Template by Georgeo (Ing. Juraj Skákala) from Slovakia'
						}
					/>
				</div>
				<div>
					<Text
						tag='a'
						href='https://github.com/SkakalaJ/react-template-2024'
						className='credits-text'
						text={'github.com/SkakalaJ/react-template-2024'}
					/>
				</div>
			</FadeInOut>
		</div>
	);
};

export default AuthorCreditsText;
