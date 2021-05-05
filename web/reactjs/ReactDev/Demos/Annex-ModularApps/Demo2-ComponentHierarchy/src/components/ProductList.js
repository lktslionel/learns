const Product = (product) =>
    <li>
		<b>{product.description}</b> <span className="detail">&pound;{product.price}, {product.unitsInStock} in stock</span>
	</li>
	
const ProductList = ({title, items}) =>
    <div>
		<h4>{title}</h4>
		<ul>
			{items.map((item, i) =>
				<Product key={i} {...item} />
			)}
		</ul>
	</div>
	
ProductList.displayName = 'ProductList'

export default ProductList
