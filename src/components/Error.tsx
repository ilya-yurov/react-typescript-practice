import React from 'react'

interface ErrorProps {
	error: string
}

const Error = ({error}: ErrorProps) => {
	return (
		<div>
			<p className='text-center text-red-700'>{error}</p>
		</div>
	);
};

export default Error;