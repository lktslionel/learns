import ItemList from './ItemList'
import '../../stylesheets/styles.css'

const Retailer = ({retailerName, products, shops}) =>
    <fieldset id={retailerName}>        
		<legend>{retailerName}</legend>
		<ItemList title="Catalog" items={products} />
		<ItemList title="Shops" items={shops} />
    </fieldset>

Retailer.displayName = 'Retailer'

export default Retailer
