/** @format */

// Components
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';

const QuoteText = () => {
	return (
		<div style={{ textAlign: 'center', top: '17%' }}>
			<FadeInOut
				action='fade-out'
				duration={2}
				delay={10}
			>
				<FadeInOut
					action='fade-in'
					duration={2}
					delay={2}
				>
					<Text
						tag='h1'
						className='quote-text'
						style={{ color: 'salmon' }}
						text='"The brighter the light,'
					/>
				</FadeInOut>
				<FadeInOut
					action='fade-in'
					duration={2}
					delay={2}
				>
					<Text
						tag='h1'
						className='quote-text'
						style={{ color: 'salmon' }}
						text='the darker the shadow."'
					/>
				</FadeInOut>
				<FadeInOut
					action='fade-in'
					duration={2}
					delay={6}
				>
					<Text
						tag='h2'
						style={{ color: 'salmon', marginTop: '10px' }}
						className='quote-text'
						text='- Carl Jung'
					/>
				</FadeInOut>
			</FadeInOut>
		</div>
	);
};

export default QuoteText;
