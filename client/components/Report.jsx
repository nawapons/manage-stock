import React from 'react'

const Report = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex-initial w-64">
                    <label htmlFor="from">
                        <span className='label-text'>From</span>
                    </label>
                    <input type="date" name="from" id="from" className='input input-success w-full max-w-xs' />
                </div>
                &nbsp;
                <div className="flex-initial w-64">
                    <label htmlFor="to">
                        <span className='label-text'>To</span>
                    </label>
                    <input type="date" name="to" id="to" className='input input-success w-full max-w-xs' />
                </div>
                &nbsp;
                <button className='btn btn-success mt-6 text-white'>Show Data</button>
            </div>
            <div className="card w-100 mt-4">
                <div className="card-body bg-base-200">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Barcode</th>
                                <th>Product Name</th>
                                <th>Import Count</th>
                                <th>Export Count</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>1001</td>
                                <td>Node.js</td>
                                <td>
                                    20
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    15
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>1002</td>
                                <td>React.js</td>
                                <td>
                                    20
                                </td>
                                <td>
                                    10
                                </td>
                                <td>
                                    10
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>1003</td>
                                <td>Angular</td>
                                <td>
                                    30
                                </td>
                                <td>
                                    15
                                </td>
                                <td>
                                    5
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Report