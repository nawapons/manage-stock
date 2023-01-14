import React from 'react';
import Layout from '@/components/Layout';
import ImportStock from '@/components/ImportStock';
const Import = () => {
    return (
        <div>
            <Layout>
                <div className="container mx-auto">
                    <h1 className='text-2xl'>Import Stock</h1>
                    <progress className="progress progress-success mt-2" value="100" max="100"></progress>
                    <div className="card w-auto shadow-xl mx-auto max-w-sm">
                        <div className="card-body">
                            <ImportStock /> 
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Import;