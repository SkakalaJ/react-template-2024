/** @format */

import Box from 'src/shared/components/layout/Box';
import Form from 'src/shared/components/forms/Form';
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import TextArea from 'src/shared/components/forms/TextArea';
import useTextToYodaLang from 'src/features/user/hooks/useTextToYodaLang';
import SphereLoader from 'src/shared/components/animations/SphereLoader';
import { useState } from 'react';
import Error from 'src/shared/components/errors/Error';

const TextToYodaTranslateForm = () => {
	const defaultText = 'Translated text will appear here.';
	const [text, setText] = useState('');
	const { yodaText, loading, error } = useTextToYodaLang(text);

	const renderAnswer = () => {
		if (loading)
			return (
				<SphereLoader
					height='100px'
					width='100px'
					margin='20px 0 20px 0'
				/>
			);

		if (error) return <Error text={error.message} />;

		return (
			<Text
				tag={'p'}
				text={text ? yodaText : defaultText}
				style={{ flex: 'none' }}
			/>
		);
	};

	const onFormSuccess = (text) => {
		setText(text);
	};

	return (
		<Form
			onFormSubmit={(e) => {
				onFormSuccess(e.target.textToTranslate.value);
			}}
		>
			<Box
				height='100px'
				style={{ marginBottom: '10px' }}
			>
				<TextArea
					maxLength={200}
					name='textToTranslate'
					placeholder='Enter text to translate to Yoda language'
				/>
			</Box>

			<Box style={{ marginBottom: '20px' }}>
				<Button
					className='button-form'
					buttonType='submit'
				>
					<Box>
						<Text
							tag={'p'}
							text={'Translate'}
						/>
					</Box>
				</Button>
			</Box>

			<Box
				height='120px'
				padding='0 25px'
				style={{ border: '2px dotted darkgray' }}
			>
				{renderAnswer()}
			</Box>
		</Form>
	);
};

export default TextToYodaTranslateForm;
