const retailersData = [
    {
        "retailerName": "Acme Incorporated",
        "products": [
            { "description": "Swansea City Shirt", "price": 53.00, "unitsInStock": 501 },
            { "description": "Cardiff City Shirt", "price": 1.99,  "unitsInStock": 29000 },
            { "description": "Bugatti Divo", "price": 4000000, "unitsInStock": 5 },
            { "description": "55in OLED HDTV", "price": 1500, "unitsInStock": 25 },
        ],
        "shops": [
            { "city": "London", "country": "UK" },
            { "city": "NY", "country": "USA" },
        ]
    },
    {
        "retailerName": "Mountains'R'Us",
        "products": [
            { "description": "Carving skis", "price": 350.00, "unitsInStock": 1000 },
            { "description": "Ski boots", "price": 170.50,  "unitsInStock": 700 },
        ],
        "shops": [
            { "city": "Val d'Isere", "country": "France" },
            { "city": "St. Anton", "country": "Austria" },
            { "city": "Kitzbuhel", "country": "Austria" },
        ]
    },
]
	
const Retailer = ({ retailerName, products, shops }) =>

    <fieldset id={retailerName}>        
		<legend>{retailerName}</legend>
		
		<h4>Catalog</h4>
		<ul className="catalog">
            {products.map((product, i) => 
				<li key={i}>{product.description}</li>
            )}
        </ul>
		
		<h4>Shops</h4>
		<ul className="shops">
			{shops.map((shop, i) =>
				<li key={i}>{shop.city}</li>
			)}
		</ul>
    </fieldset>

const RetailerDirectory = ({title, retailers}) =>
    <div>
        <header>
            <h1>{title}</h1>
        </header>
        <div>
            {retailers.map((retailer, i) =>
                <Retailer key={i} {...retailer} />
            )}
        </div>
    </div>

ReactDOM.render(
    <RetailerDirectory retailers={retailersData} title="Totally Awesome Retailers" />,
    document.getElementById("osl-container")
)
