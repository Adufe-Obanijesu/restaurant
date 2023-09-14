import Member from "./atoms/Member";

const Chef = () => {
	return (
		<section id="chef" className="mt-16 md:mt-36 px-8 md:px-16 bg-white">
            <div className="flex justify-center">
                <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-wide py-2 border-b-2 border-orange-600">our chefs</h3>
            </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 md:gap-10 z-20 mt-12">
                <Member name="John Doe" image="/images/chef/chef1.jpg" />
                <Member name="Joseph Doe" image="/images/chef/chef2.jpg" />
                <Member name="Jane Doe" image="/images/chef/chef3.jpg" />
                <Member name="Barry Houston" image="/images/chef/chef1.jpg" />
                <Member name="James Lou" image="/images/chef/chef2.jpg" />
            </div>

        </section>
	)
}

export default Chef;