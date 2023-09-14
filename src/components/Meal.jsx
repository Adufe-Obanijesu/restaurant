import EachMeal from "./atoms/EachMeal";

const Meal = () => {
	return (
    <div id="menu" className="mt-12 md:mt-36 mx-16">
    <div className="flex justify-center">
        <h3 className="text-2xl font-bold md:text-3xl uppercase tracking-wide py-2 border-b-2 border-orange-600">our menu</h3>
    </div>
		<div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-10 lg:grid-cols-5">
		
        <EachMeal name="French Fries" image="/images/menu/1.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Bacon and Eggs" image="/images/menu/6.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Steak" image="/images/menu/2.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="French Toast" image="/images/menu/5.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Scrambled Eggs" image="/images/menu/3.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Cinnamon Rolls" image="/images/menu/4.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Egg Benedict" image="/images/menu/1.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Avocado Toast" image="/images/menu/6.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal name="Hash Browns" image="/images/menu/4.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />
        <EachMeal hidden name="Cornbread" image="/images/menu/5.png" desc="Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur." />

      </div>

      <div className="flex justify-center mt-12">
          <button className="inline-block rounded-full bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 border-2 border-orange-600">
            Order Now
          </button>
      </div>
    </div>
	)
}

export default Meal;