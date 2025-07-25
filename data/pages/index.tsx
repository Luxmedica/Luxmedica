import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import products from '../data/products.en.json'

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Luxmedica</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1rem' }}>
        {products.map(product => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Layout>
  )
}
