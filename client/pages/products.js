import React from 'react'
import Layout from '@/components/layout'
import { ProductsInput, ProductsTable } from '@/components/Products'
const products = () => {
    return (
        <div>
            <Layout>
                <div className='container mx-auto'>
                    <h1 className='text-2xl'>Products</h1>
                    <progress className="progress progress-success mt-2" value="100" max="100"></progress>
                    <div className="flex flex-col w-full lg:flex-row mt-2">
                        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                            <ProductsTable />
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                            <form method="post">
                                <ProductsInput />
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default products