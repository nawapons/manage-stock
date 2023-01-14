import React from 'react'
import Layout from '@/components/layout'
import Report from '@/components/Report'
const report = () => {
    return (
        <div>
            <Layout>
                <div className="container mx-auto">
                    <h1 className='text-2xl'>Report Stock</h1>
                    <progress className="progress progress-success mt-2" value="100" max="100"></progress>
                    <Report />
                </div>
            </Layout>
        </div>
    )
}

export default report