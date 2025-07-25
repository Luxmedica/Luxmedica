import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow p-4 text-left">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">€{product.price}</p>
      <Link href={`/products/${product.slug}`}>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Product
        </button>
      </Link>
    </div>
  )
}
