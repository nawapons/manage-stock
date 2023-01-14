import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
export const ProductsInput = () => {
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Barcode</span>
                </label>
                <input type="text" name='barcode' id='barcode' placeholder="xxxxxx" className="input input-success w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" name='product-name' id='product-name' placeholder="example" className="input input-success w-full max-w-xs" />
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success mt-3 text-white">ADD Product</button>
            </div>
        </div>
    )
}
export const ProductsTable = () => {
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Barcode</th>
                    <th>Product Name</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>1001</td>
                    <td>Node.js</td>
                    <td>
                        <button className='btn btn-warning text-white'><FaEdit /></button>&nbsp;
                        <button className='btn btn-error text-white'><FaTrashAlt /></button>
                    </td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>1002</td>
                    <td>React.js</td>
                    <td>
                        <button className='btn btn-warning text-white'><FaEdit /></button>&nbsp;
                        <button className='btn btn-error text-white'><FaTrashAlt /></button>
                    </td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>1002</td>
                    <td>Angular</td>
                    <td>
                        <button className='btn btn-warning text-white'><FaEdit /></button>&nbsp;
                        <button className='btn btn-error text-white'><FaTrashAlt /></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}