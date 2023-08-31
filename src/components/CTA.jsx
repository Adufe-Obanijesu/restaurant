const CTA = () => {
	return (
		<section>
		  <div className="mx-auto max-w-screen-2xl px-4 mt-12 md:mt-24 sm:px-6 lg:px-8">
		    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
		      <div className="bg-orange-600 px-8 py-12 md:p-12 lg:px-16 lg:py-24">
		        <div className="mx-auto max-w-xl text-center">
		          <h2 className="text-xl font-bold text-white md:text-3xl">
		            Our meals are cooked with honour. Order now and prove us!
		          </h2>

		          <p className="hidden text-white/90 sm:mt-4 sm:block">
		            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
		            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
		            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
		            tincidunt duis.
		          </p>

		          <div className="mt-4 md:mt-8">
		            <a
		              href="#"
		              className="inline-block rounded-full border border-white bg-white px-12 py-3 text-sm font-medium text-orange-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
		            >
		              Order Now
		            </a>
		          </div>
		        </div>
		      </div>

		      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
		        
		      	<img
		          alt="Restuarant"
		          src="/images/restaurant-5.jpg"
		          className="h-40 w-full hidden lg:block object-cover sm:h-56 md:h-full"
		        />

		        <img
		          alt="Restaurant"
		          src="/images/restaurant-4.jpg"
		          className="h-40 w-full hidden md:block object-cover sm:h-56 md:h-full"
		        />

		      </div>
		    </div>
		  </div>
		</section>
	)
}

export default CTA;