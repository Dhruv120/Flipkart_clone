import Product from './model/product-schema.js';
import { products } from './constants/data.js';
import Connection from './database/db.js';

const DefaultData = async () => {
    try {
        await Product.deleteMany({});  
        await Product.insertMany(products);

        console.log('Product Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData; 