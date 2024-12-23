import { Setting24 } from '../assets/SettingIcon';
import SButton from '../components/SButton';

const Button = () => {
	return (
		<div className='flex flex-col gap-12pxr p-16pxr'>
			<div>
				<b>Button</b>
			</div>
			<div className='inline-flex items-center gap-8pxr'>
				<SButton
					outline
					label='xs button'
				/>
				<SButton
					disabled
					label='sm button'
				/>
				<SButton
					outline
					icon={<Setting24 />}
					label='md button'
				/>
				<SButton
					outline
					disabled
					icon='HelpOutline_16'
					label='lg button'
				/>
			</div>
			<div className='inline-flex items-center gap-8pxr'>
				<SButton
					size='xs'
					label='xs button'
				/>
				<SButton
					size='sm'
					label='sm button'
				/>
				<SButton
					size='md'
					label='md button'
				/>
				<SButton
					size='lg'
					label='lg button'
				/>
			</div>
		</div>
	);
};

export default Button;
