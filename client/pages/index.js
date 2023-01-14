
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className='text-2xl'>Welcome to Manange Stock Online</h1>
        <progress className="progress progress-success mt-2" value="100" max="100"></progress>
      </div>
    </Layout>
  )
}
