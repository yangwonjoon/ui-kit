import { useState } from 'react';
import './css/App.css';
import SDropdown from './components/SDropdown';
import SCheckbox from './components/SCheckbox';
import SButton from './components/SButton';
import SRadio from './components/SRadio';
import STabs from './components/STabs';
import STabPanel from './components/STabPanel';
import STag from './components/STag';
import { Setting24 } from './assets/SettingIcon';

function App() {
	const [checked, setChecked] = useState<boolean>(false);
	function handleClick() {
		setChecked(!checked);
	}

	const items = [
		{ label: 'item1', value: 'item1', disabled: false },
		{ label: 'item2', value: 'item2', disabled: false },
		{ label: 'item3', value: 'item3', disabled: false },
	];
	const [selectedValue, setSelectedValue] = useState<string | number>('item3');

	const handleRadioChange = (model: string | number) => {
		setSelectedValue(model);
	};

	const [tabValue, setTabValue] = useState<string>('tab1');

	function handleTabChange(val: string) {
		console.log(val);
		setTabValue(val);
	}

	return (
		<>
			<main>
				<div className='flex flex-col gap-12pxr p-16pxr'>
					<div>
						<b>Tabs</b>
					</div>
					<div className='flex flex-col gap-8pxr'>
						<STabs
							tabs={[
								{ label: 'tab1', value: 'tab1', badge: 'tab1' },
								{ label: 'tab2', value: 'tab2', badge: 'tab2' },
								{ label: 'tab3', value: 'tab3' },
								{ label: 'tab4', value: 'tab4' },
							]}
							model={tabValue}
							onChange={handleTabChange}
						>
							<STabPanel value='tab1'>
								<p>Tab 1 Content</p>
							</STabPanel>
							<STabPanel value='tab2'>
								<p>Tab 2 Content</p>
							</STabPanel>
							<STabPanel value='tab3'>
								<p>Tab 3 Content</p>
							</STabPanel>
							<STabPanel value='tab4'>
								<p>Tab 4 Content</p>
							</STabPanel>
						</STabs>

						<STabs
							tabs={[
								{ label: 'tab1', value: 'tab1', badge: 'tab1' },
								{ label: 'tab2', value: 'tab2', badge: 'tab2' },
								{ label: 'tab3', value: 'tab3' },
								{ label: 'tab4', value: 'tab4' },
							]}
							size='sm'
							model={tabValue}
							onChange={handleTabChange}
						>
							<STabPanel value='tab1'>
								<p>Tab 1 Content</p>
							</STabPanel>
							<STabPanel value='tab2'>
								<p>Tab 2 Content</p>
							</STabPanel>
							<STabPanel value='tab3'>
								<p>Tab 3 Content</p>
							</STabPanel>
							<STabPanel value='tab4'>
								<p>Tab 4 Content</p>
							</STabPanel>
						</STabs>
					</div>
				</div>

				<div className='flex flex-col gap-12pxr p-16pxr'>
					<div>
						<b>Radio</b>
					</div>
					value : {selectedValue}
					<div className='inline-flex items-center gap-8pxr'>
						{items.map((item) => (
							<SRadio
								key={item.value}
								name='item'
								label={item.label}
								value={item.value}
								disabled={item.disabled}
								model={selectedValue}
								className='mx-2 my-1'
								onChange={handleRadioChange}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-12pxr p-16pxr'>
					<div>
						<b>Checkbox</b>
					</div>
					<div>
						<SButton
							onClick={handleClick}
							label='toggle button'
						/>
					</div>
					<div className='inline-flex items-center gap-8pxr'>
						<SCheckbox
							label='aaa'
							checked={checked}
							className='m-11'
						/>
						<SCheckbox
							label='aaa'
							className='m-11'
							checked={checked}
						/>
						<SCheckbox
							label='aaa'
							className='m-11'
							checked={checked}
							disabled
						/>
					</div>
				</div>

				<div className='flex flex-col gap-12pxr p-16pxr'>
					<div>
						<b>Dropdown Button</b>
					</div>
					<div className='inline-flex items-center gap-8pxr'>
						<SDropdown
							options={[
								{ label: 'option 1', value: 1 },
								{ label: 'option 2', value: 2 },
							]}
							onClick={() => ''}
							size='xs'
							label='dropdown'
						/>
						<SDropdown
							options={[
								{ label: 'option 1', value: 1, disable: true },
								{ label: 'option 2', value: 2 },
							]}
							onClick={() => ''}
							size='sm'
							label='dropdown'
						/>
						<SDropdown
							options={[
								{ label: `<span style="color: red">option 1</span>`, value: 1 },
								{ label: 'option 2', value: 2, display: false },
							]}
							onClick={() => ''}
							size='md'
							label='dropdown'
						/>
					</div>
					<div className='inline-flex items-center gap-8pxr'>
						<SDropdown
							options={[
								{ label: 'option 1', value: 1 },
								{ label: 'option 2', value: 2 },
							]}
							onClick={() => ''}
							outline
							size='xs'
							label='dropdown'
						/>
						<SDropdown
							options={[
								{ label: 'option 1', value: 1, disable: true },
								{ label: 'option 2', value: 2 },
							]}
							onClick={() => ''}
							outline
							size='sm'
							label='dropdown'
						/>
						<SDropdown
							options={[
								{ label: `<span style="color: red">option 1</span>`, value: 1 },
								{ label: 'option 2', value: 2, display: false },
							]}
							onClick={() => ''}
							outline
							size='md'
							label='dropdown'
						/>
					</div>
					<div className='inline-flex items-center gap-8pxr'>
						<SDropdown
							options={[
								{ label: 'option 1', value: 1 },
								{ label: 'option 2', value: 2 },
							]}
							onClick={() => ''}
							disabled
							size='xs'
							label='dropdown'
						/>
						<SDropdown
							options={[
								{ label: 'option 1', value: 1, disable: true },
								{ label: 'option 2', value: 2 },
							]}
							onClick={() => ''}
							disabled
							size='sm'
							label='dropdown'
						/>
					</div>
				</div>

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
    <STag label='tag' color="grey" />
				</div>
			</main>
		</>
	);
}

export default App;
