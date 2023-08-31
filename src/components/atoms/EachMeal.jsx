const EachMeal = ({ name, image, desc, hidden=false }) => {
	return (
		<div
          className={`${hidden && "md:hidden lg:block"} rounded-xl md:px-4 py-4 shadow-sm hover:border-gray-200 hover:ring-1 md:hover:ring-gray-200 focus:outline-none focus:ring`}>
          <div className="flex justify-center">
            <span className="inline-block rounded-full py-4 md:px-6">
              <img src={image} className="w-28 h-28 lg:h-40 lg:w-40 object-cover" />
            </span>
          </div>

          <h2 className="mt-4 font-bold text-center">{name}</h2>

          <p className="hidden text-center sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            {desc}
          </p>
        </div>
	)
}

export default EachMeal;