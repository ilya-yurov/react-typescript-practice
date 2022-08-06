import React, {useState} from 'react'
import {IProduct} from '../models'

interface ProductProps {
	product: IProduct
}

const Product = ({product}: ProductProps) => {

	const [details, setDetails] = useState(false)
	const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<img src={product.image} className='w-1/6' alt={product.title} />
			<p>{product.title}</p>
			<span className={'font-bold'}>{product.price}</span>
			<button
				onClick={() => setDetails(prev => !prev)}
				className={`py-2 px-4 border ${btnClassName}`}>
				{details ? 'Hide details' : 'Show details'}
			</button>
			{details && 
			<>
			<div>{product.description}</div>
			<div>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></div>
			</>
			}
		</div>
	);
};

export default Product