import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-[90vh] text-center md:text-xl flex flex-col justify-center px-2 py-4">
      <h2 className="text-xl md:text-3xl font-semibold text-primarypurple-950 capitalize pb-6">product not found</h2>
      <p className="font-medium pb-10">Sorry. That Product does not appear to be available</p>
      <Link href="/" className="hover:underline underline-offset-4 hover:text-primarypurple-950">Return Home</Link>
    </div>
  )
}