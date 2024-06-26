/** @format */

// Components
import Text from 'src/shared/components/ui/Text';

const AuthorCreditsText = () => {
	return (
		<div
			style={{ margin: '25px auto', minWidth: '429px', textAlign: 'center' }}
		>
			<div>
				<Text
					tag='a'
					href='https://github.com/SkakalaJ/react-template-2024'
					className='credits-text'
					style={{ color: 'black' }}
					text={'React Template by Georgeo (Ing. Juraj Skákala) from Slovakia'}
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
		</div>
	);
};

export default AuthorCreditsText;
