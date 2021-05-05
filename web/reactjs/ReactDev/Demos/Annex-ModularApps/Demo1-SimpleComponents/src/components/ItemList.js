const ItemList = ({title, items}) =>
    <div>
		<h4>{title}</h4>
		<ul>
			{items.map((item, i) =>
				<li key={i}>{item}</li>
			)}
		</ul>
	</div>
	
ItemList.displayName = 'ItemList'

export default ItemList
