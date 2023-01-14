import React from 'react'

const ExportStock = () => {
    return (
        <div>
            <div className="form-control">
                <input type="text" disabled name='Product Name' id='Product Name' placeholder="" className="input input-success w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Barcode</span>
                </label>
                <input type="text" name='barcode' id='barcode' placeholder="xxxxxx" className="input input-success w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input type="text" name='quantity' id='quantity' placeholder="example" className="input input-success w-full max-w-xs" />
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success mt-3 text-white">Export Stock</button>
            </div>
        </div>
    )
}

export default ExportStock