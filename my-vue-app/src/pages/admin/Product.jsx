import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <div>
            <Link to={`/admin/product/add`}><button>Add New Product</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default ProductPage