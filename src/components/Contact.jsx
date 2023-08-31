const Contact = () => {
	return (
		<div className="bg-lightgray px-6 my-12 md:my-36">
        <div className="flex justify-center">
        <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-wide py-2 border-b-2 border-orange-600">Contact</h3>
    </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 text-lg gap-6 mt-12">
          <div className="bg-white p-8 drop-shadow">
            <span className="text-gray-600">Address:</span> <span className="text-orange-400">198 West 21th Street,
            Suite 721 New York NY 10016</span>
          </div>

          <div className="bg-white p-8 drop-shadow">
            <span className="text-gray-600">Phone:</span>{" "}
            <span
              className="text-orange-400 font-semibold"
              style={{ fontSize: "16px" }}
            >
              + 1235 2355 98
            </span>
          </div>

          <div className="bg-white p-8 drop-shadow">
            <span className="text-gray-600">Email:</span>{" "}
            <span
              className="text-orange-400 font-semibold"
              style={{ fontSize: "16px" }}
            >
              info@yoursite.com
            </span>
          </div>

          <div className="bg-white p-8 drop-shadow">
            <span className="text-gray-600">Website:</span>{" "}
            <span
              className="text-orange-400 font-semibold"
              style={{ fontSize: "16px" }}
            >
              yoursite.com
            </span>
          </div>
        </div>

      </div>
	)
}

export default Contact;