import ProductList from './ProductList'
import ShopList from './ShopList'
import '../../stylesheets/styles.css'

const Retailer = ({retailerName, products, shops}) =>
    <fieldset id={retailerName}>        
		<legend>{retailerName}</legend>
		<ProductList title="Catalog" items={products} />
		<ShopList title="Shops" items={shops} />
    </fieldset>

Retailer.displayName = 'Retailer'

export default Retailer
