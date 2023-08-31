import { TbTruckDelivery, TbGrill, TbHome2 } from "react-icons/tb";
import { PiBowlFoodBold } from "react-icons/pi";

const Services = () => {
	return (
    <div className="mt-12 md:mt-20 mx-8 md:mx-16">
    <div className="flex justify-center">
        <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-wide py-2 border-b-2 border-orange-600">our Services</h3>
    </div>
		<div className="grid grid-cols-2 gap-4 mt-6 md:mt-12 lg:grid-cols-4">
		
        <div
          className="block rounded-xl px-4 py-8 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-gray-100 py-6 px-6">
              <TbTruckDelivery className="text-6xl text-orange-600" />
            </span>
          </div>

          <h2 className="mt-4 font-bold text-center">Fast Delivery</h2>

          <p className="hidden text-center sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div
          className="block rounded-xl px-4 py-8 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-gray-100 py-6 px-6">
              <TbGrill className="text-6xl text-orange-600" />
            </span>
          </div>

          <h2 className="mt-4 font-bold text-center">Grill Room Services</h2>

          <p className="hidden text-center sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div
          className="block rounded-xl px-4 py-8 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-gray-100 py-6 px-6">
              <TbHome2 className="text-6xl text-orange-600" />
            </span>
          </div>

          <h2 className="mt-4 font-bold text-center">Home Services</h2>

          <p className="hidden text-center sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div
          className="block rounded-xl px-4 py-8 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-gray-100 py-6 px-6">
              <PiBowlFoodBold className="text-6xl text-orange-600" />
            </span>
          </div>

          <h2 className="mt-4 font-bold text-center">Fast Food</h2>

          <p className="hidden text-center sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur.
          </p>
        </div>

      </div>
    </div>
	)
}

export default Services;