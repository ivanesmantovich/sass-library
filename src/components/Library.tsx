import React from 'react';
import Card from './Card';

const Library = () => {
	return (
		<>
			<div className="navbar mb-4">
				<div className="container">
					<h1 className="site-title">Life Maintenance CSS</h1>
					<p>Console-like UI with nice colors</p>
				</div>
			</div>
			<div className="container">
				<h2 className="mb-1">Colors</h2>
				<div>
					<span className="text-blue">blue text</span> |
					<span className="text-red">red text</span> |
					<span className="text-green">green text</span> |
					<span className="text-yellow">yellow text</span> |
					<span className="text-purple">purple text</span> |
					<span className="text-orange">orange text</span> |
					<span className="text-gray">gray text</span> |
					<span className="text-black">black text</span>
				</div>
				<hr className="mt-4 mb-4" />
				<div>
					<h2 className="mb-1">Backgrounds</h2>
					<span className="bg-blue text-white">bg blue</span> |
					<span className="bg-red text-white">bg red</span> |
					<span className="bg-green text-white">bg green</span> |
					<span className="bg-yellow text-white">bg yellow</span> |
					<span className="bg-purple text-white">bg purple</span> |
					<span className="bg-orange text-white">bg orange</span> |
					<span className="bg-gray text-white">bg gray</span> |
					<span className="bg-black text-white">bg black</span>
				</div>
				<hr className="mt-4 mb-4" />
				<div>
					<h2 className="mb-1">Hues</h2>
					<span className="bg-purple-dark-8 text-white">purple dark 8</span> |
					<span className="bg-purple-dark-6 text-white">purple dark 6</span> |
					<span className="bg-purple-dark-4 text-white">purple dark 4</span> |
					<span className="bg-purple-dark-2 text-white">purple dark 2</span> |
					<span className="bg-purple text-white">purple</span> |
					<span className="bg-purple-light-2 text-white">purple light 2</span> |
					<span className="bg-purple-light-4 text-white">purple light 4</span> |
					<span className="bg-purple-light-6 text-white">purple light 6</span> |
					<span className="bg-purple-light-8 text-white">purple light 8</span>
				</div>
				<hr className="mt-4 mb-4" />
				<div>
					<h2 className="mb-1">Hovers</h2>
					<span className="text-black text-hover-white bg-hover-blue">
						POINT AT ME
					</span>{' '}
					<br />
					<span className="text-black text-hover-white bg-hover-purple">
						POINT AT ME
					</span>{' '}
					<br />
					<span className="text-black text-hover-white bg-hover-yellow">
						POINT AT ME
					</span>{' '}
					<br />
					<span className="text-black text-hover-white bg-hover-red">
						POINT AT ME
					</span>{' '}
					<br />
					<span className="text-black text-hover-white bg-hover-orange">
						POINT AT ME
					</span>{' '}
					<br />
					<span className="text-black text-hover-white bg-hover-green">
						POINT AT ME
					</span>
				</div>
				<hr className="mt-4 mb-4" />
				<div>
					<h2 className="mb-1">Buttons</h2>
					<span style={{ marginRight: '10px' }} className="btn">
						Default button
					</span>
				</div>
				<div style={{ marginTop: '10px', marginBottom: '10px' }}>
					<span style={{ marginRight: '10px' }} className="btn-blue">
						Blue button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-purple">
						Purple button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-yellow">
						Yellow button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-red">
						Red button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-orange">
						Orange button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-green">
						Green button
					</span>
				</div>
				<div style={{ marginTop: '10px', marginBottom: '10px' }}>
					<span style={{ marginRight: '10px' }} className="btn-outlined-blue">
						Outlined blue button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-outlined-purple">
						Outlined purple button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-outlined-yellow">
						Outlined yellow button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-outlined-red">
						Outlined red button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-outlined-orange">
						Outlined orange button
					</span>
					<span style={{ marginRight: '10px' }} className="btn-outlined-green">
						Outlined green button
					</span>
				</div>
				<div style={{ marginTop: '10px', marginBottom: '10px' }}>
					<span
						style={{ marginRight: '10px' }}
						className={'btn-complement-blue'}
					>
						Complement blue button
					</span>
					<span
						style={{ marginRight: '10px' }}
						className={'btn-complement-purple'}
					>
						Complement purple button
					</span>
					<span
						style={{ marginRight: '10px' }}
						className={'btn-complement-yellow'}
					>
						Complement yellow button
					</span>
					<span
						style={{ marginRight: '10px' }}
						className={'btn-complement-red'}
					>
						Complement red button
					</span>
					<span
						style={{ marginRight: '10px' }}
						className={'btn-complement-orange'}
					>
						Complement orange button
					</span>
					<span
						style={{ marginRight: '10px' }}
						className={'btn-complement-green'}
					>
						Complement green button
					</span>
				</div>
				<hr className="mt-4 mb-4" />
				<div style={{ marginTop: '10px', marginBottom: '10px' }}>
					<h2 className="mb-1">Font sizes</h2>
					<div className="font-sm">This is small font</div>
					<div className="font-md">This is medium font</div>
					<div className="font-lg">This is large font</div>
					<div className="font-xl">This is extra large font</div>
					<div className="font-xxl">This is extra-extra large font</div>
				</div>
				<hr className="mt-4 mb-4" />
				<div>
					<h2 className="mb-1">Responsive</h2>
					<p className="responsive-test font-xxl">Resposive text</p>
					<p>(Resize the screen to change the color of the text above)</p>
				</div>
				<hr className="mt-4 mb-4" />
				<div>
					<h2 className="mb-2">Grid System</h2>
					<div className="row gap-2 justify-center">
						<div className="col-12-xs col-5-sm col-3-xl">
							<Card
								title={'Responsive card'}
								body={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt expedita sequi, neque veniam quam quis delectus repudiandae, ducimus error nulla voluptas provident sunt saepe nihil nisi, totam obcaecati libero.'
								}
							/>
						</div>
						<div className="col-12-xs col-5-sm col-3-xl">
							<Card
								title={'Responsive card'}
								body={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt expedita sequi, neque veniam quam quis delectus repudiandae, ducimus error nulla voluptas provident sunt saepe nihil nisi, totam obcaecati libero.'
								}
							/>
						</div>
						<div className="col-12-xs col-5-sm col-3-xl">
							<Card
								title={'Responsive card'}
								body={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt expedita sequi, neque veniam quam quis delectus repudiandae, ducimus error nulla voluptas provident sunt saepe nihil nisi, totam obcaecati libero.'
								}
							/>
						</div>
						<div className="col-12-xs col-5-sm col-3-xl">
							<Card
								title={'Responsive card'}
								body={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt expedita sequi, neque veniam quam quis delectus repudiandae, ducimus error nulla voluptas provident sunt saepe nihil nisi, totam obcaecati libero.'
								}
							/>
						</div>
						<div className="col-12-xs col-5-sm col-3-xl">
							<Card
								title={'Responsive card'}
								body={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt expedita sequi, neque veniam quam quis delectus repudiandae, ducimus error nulla voluptas provident sunt saepe nihil nisi, totam obcaecati libero.'
								}
							/>
						</div>
					</div>
				</div>
				<hr className="mt-4 mb-4" />
				<h2 className="mb-2">Card</h2>
				<Card
					title={'This is the card'}
					body={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ducimus unde neque praesentium sapiente beatae facere quibusdam minima, excepturi veritatis ab quasi qui suscipit enim illo facilis id nemo. Sequi!'
					}
				/>
				<hr className="mt-4 mb-4" />
			</div>
		</>
	);
};

export default Library;
