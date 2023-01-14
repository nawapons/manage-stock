import React from 'react'
import Layout from '@/components/layout'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
const products = () => {
    return (
        <div>
            <Layout>
                <div className='container mx-auto'>
                    <h1 className='text-2xl'>Products</h1>
                    <progress className="progress progress-success mt-2" value="100" max="100"></progress>
                    <div className="flex flex-col w-full lg:flex-row mt-2">
                        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
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
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                            <form method="post">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Barcode</span>
                                    </label>
                                    <input type="text" name='barcode' id='barcode' placeholder="xxxxxx" className="input input-success w-full max-w-xs" />
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" name='product-name' id='product-name' placeholder="example" className="input input-success w-full max-w-xs" />
                                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success mt-3 text-white">ADD Product</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default products