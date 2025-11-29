import { StarIcon } from '@heroicons/react/20/solid'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { ProductReviewCard } from './ProductReviewCard'
import Box from '@mui/material/Box'
import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { mens_kurta } from '../../../Data/mens_kurta'
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard'
import { useNavigate } from 'react-router-dom'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ratingSummary = [
  { label: "Excellent", value: 19259, color: "#2ecc71" }, // green
  { label: "Very Good", value: 15000, color: "#27ae60" }, // darker green
  { label: "Good", value: 8000, color: "#f1c40f" },       // yellow
  { label: "Average", value: 6000, color: "#e67e22" },    // orange
  { label: "Poor", value: 3000, color: "#e74c3c" }        // red
]

export default function ProductDetails() {
  // Ratings data (with counts)
  const ratingsData = [
    { label: 'Excellent', count: 19259, color: '#4caf50' },
    { label: 'Very Good', count: 15000, color: '#2196f3' },
    { label: 'Good', count: 8000, color: '#ffeb3b' },
    { label: 'Average', count: 6000, color: '#ff9800' },
    { label: 'Poor', count: 3000, color: '#f44336' },
  ]
  const navigate=useNavigate();

  const handleAddToCart=()=>{
    navigate("/cart")
  }

  const totalRatings = ratingsData.reduce((acc, item) => acc + item.count, 0)

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 px-6 py-12">
          {/* Left: Images */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg w-full max-w-md">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="flex space-x-2 mt-4">
              {product.images.slice(1).map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
              product.title
            </h1>
            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
              <p className="font-semibold">{product.price}</p>
              <p className="opacity-60 line-through">$500</p>
              <p className="text-green-600 font-semibold">-25%</p>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center space-x-2">
                <Rating name="read-only" value={3.5} readOnly />
                <p className="opacity-50 text-sm">50650 rating</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  3750 reviews
                </p>
              </div>
            </div>

            {/* Size & Button */}
            <form className="mt-10">
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.sizes.map((size) => (
                    <label
                      key={size.name}
                      className={classNames(
                        'border rounded-md py-2 text-sm text-center cursor-pointer',
                        size.inStock
                          ? 'bg-white text-gray-900'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      )}
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size.name}
                        disabled={!size.inStock}
                        className="sr-only"
                      />
                      {size.name}
                    </label>
                  ))}
                </div>
              </div>

              <Button onClick={handleAddToCart}
                variant="contained"
                sx={{ px: '2rem', py: '1rem', bgcolor: '#9155fd' }}
              >
                Add to Cart
              </Button>
            </form>

            <div className="mt-10">
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-600">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <p className="mt-2 text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </section>

        {/* Rating & Reviews */}
        <section className="font-semibold text-lg pb-4 text-left">
          <h1>Recent Review & Rating</h1>
          <div className="border p-5">
            <Grid container spacing={7} className="flex justify-between">
              {/* Left: Review Cards */}
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item, idx) => (
                    <ProductReviewCard key={idx}></ProductReviewCard>
                  ))}
                </div>
              </Grid>

              {/* Right: Rating Summary */}
              <Grid item xs={12} md={4}>
  <Typography variant="h6" gutterBottom>Product Rating</Typography>

  {/* Overall Rating */}
  <Box display="flex" alignItems="center" gap={1} sx={{ mb: 2 }}>
    <Rating value={4.5} precision={0.5} readOnly />
    <Typography fontWeight="bold">51,259 Ratings</Typography>
  </Box>

  {/* Rating Breakdown */}
  {ratingSummary.map((item, index) => (
    <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <Typography sx={{ minWidth: 80 }}>{item.label}</Typography>
      <LinearProgress
              variant="determinate"
              value={(item.value / 51259) * 100}
              sx={{
                flexGrow: 1,
                mx: 2,
                height: 12, // increased thickness
                borderRadius: 5,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: item.color
                }
              }}
            />
      <Typography>{item.value}</Typography>
    </Box>
  ))}
</Grid>

            </Grid>
          </div>
        </section>
        {/* similar Product */}
        <section className='pt-10'>
          <h1 className='py-5 text-xl font-bold text-left'>Similar Products</h1>
          <div className='flex flex-wrap space-y-5'>
            {mens_kurta.map((item)=><HomeSectionCard product={item} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
