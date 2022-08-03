import _ from 'lodash'
import axios from 'axios';


export async function fetchProducts() {
    const configs = {
        headers: {}
    }

    const res = await axios.get('http://localhost:5001/api/products', configs)
    return res
} 
