const Hero = () => {
	return (
		<section>
		  <div
		    className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16"
		  >
		    <div className="md:grid gap-8 md:grid-cols-2 lg:gap-16">
		      <div
		        className="relative lg:h-full overflow-hidden hidden md:block rounded-lg h-80 lg:order-last"
		      >
		        <img
		          alt="Party"
		          src="/images/hero.jpg"
		          className="absolute inset-0 h-full w-full object-cover"
		        />
		      </div>

		      <div className="py-6 md:py-12 lg:py-24">
		        <h2 className="font-black text-3xl lg:text-5xl uppercase text-center md:text-start">
		        	best food for <br /> your taste
		        </h2>

		        <p className="mt-4 text-gray-500 text-base text-center md:text-start">
		          Satisfying your appetite with special delicacy cooked with much love. We are passionate about giving the best to our customers. Just click on <b className="text-orange-600">Order Now</b> and let's get started!
		        </p>

		        <div className="flex justify-center md:justify-start">
			        <div
			          className="mt-8 inline-block rounded bg-orange-600 rounded-full px-12 py-3 text-sm font-medium text-white transition ease-in duration-300 hover:text-orange-600 hover:bg-transparent border-2 border-orange-600 focus:outline-none"
			        >
			          Order Now
			        </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}

export default Hero;