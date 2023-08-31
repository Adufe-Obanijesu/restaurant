const Member = ({ image, name}) => {
	return (
		<div className="flex justify-center mb-8 md:mb-0">
            <div>
                <div className="flex justify-center">
                    <img src={image} className="rounded-full w-28 h-28 lg:h-48 lg:w-48 object-cover" />
                </div>
                <h3 className="text-center mt-4 font-semibold tracking-wider lg:text-base text-sm w-36 lg:w-56">{name}</h3>
            </div>
        </div>
	)
}

export default Member;