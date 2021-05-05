const Shop = (shop) =>
    <li>
		<b>{shop.city}</b> <span className="detail">{shop.country}</span>
	</li>
	
const ShopList = ({title, items}) =>
    <div>
		<h4>{title}</h4>
		<ul>
			{items.map((item, i) =>
				<Shop key={i} {...item} />
			)}
		</ul>
	</div>
	
ShopList.displayName = 'ShopList'

export default ShopList
