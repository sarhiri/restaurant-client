import MenuHead from '../components/MenuHead'

const appetizers = [
  { title: "Chicken Pastilla Rolls", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Seafood Pastilla Triangles", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Kefta Spring Rolls", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Harira soup", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Lentil Soup", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Fava Bean Soup", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." }
  
];


const salads = [
  { title: "Caesar Salad", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Mediterannean Salad", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Za'alouk", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Hummus", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Roasted Carrots", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Beet Salad", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Roasted Peppers", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Family Style", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },

  // Add more items...
];

// Repeat for other sections (Main Entrees, Sides, etc.)
const mains = [
  { title: "Moroccan Chicken with Preserved Lemons and olives", description: "" },
  { title: "Roasted Chicken with Apricots, Caramelized Onions and Rasins", description: "" },
  { title: "Sweet Chicken Couscous", description: "" },
  { title: "Vegetarian Chicken Couscous", description: "" },
  { title: "Traditional Couscous", description: "" },
  { title: "Tilapia Tajine", description: "" },
  { title: "Salmon Tajine", description: "" },
  { title: "Lamb with Apricots and Prunes", description: "" },
  { title: "Lamb M'rozia with Caramelized Onions and Rasins", description: "" },
  { title: "Marinated Lamb Cutlets", description: "" },
  { title: "Marinated Lamb Kabob", description: "" },
  { title: "Kefta Kabab", description: "" },
  { title: "Shakshouka", description: "" },
  { title: "Marinated Shrimp Kabab", description: "" },
  { title: "Bocadillo Sandwich", description: "Served with fries and salad or your choice of side. " },
  // Add more items...
];

const sides = [
  { title: "Fries", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Rice", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { title: "Plain Couscous", description: "" },
  { title: "Couscous with sauce", description: "" },
  { title: "House Bread", description: "" },
  { title: "Flat Bread", description: "" },
  { title: "Harissa", description: "" },
  { title: "Black Olive & Olive Oil Flight", description: "" },
  { title: "Fried Anchovies", description: "" },
  // Add more items...
];

const desserts = [
  { title: "Seffa", description: "" },
  { title: "Ghoriba", description: "" },
  { title: "Chebakia", description: "" },
  { title: "Fruit and Cream Cake", description: "" },
  { title: "Basbousa Cake", description: "" },
  { title: "Lemon Olive Oil Cake", description: "" },
  { title: "Baklava", description: "" },
  { title: "Chocolate Filled Anise Rolls", description: "" },
  // Add more items...
];

const drinks = [
  { title: "Fountain Soda", description: "" },
  { title: "Moroccan Mint Tea", description: "" },
  { title: "Espresso", description: "" },
  { title: "Latte", description: "" },
  { title: "Black Tea", description: "" },
  { title: "Lemon Mint Smoothie", description: "" },
  { title: "Fruit Smoothie", description: "" },
  { title: "Orangina", description: "" },
  { title: "Hawaii", description: "" },
  { title: "Poms", description: "" },
  // Add more items...
];

const MenuSection = ({ title, items }) => {
  return (
    <div className="menu-section mb-8 px-20">
      <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
        {items.map((item, index) => (
          <div key={index} className="menu-item p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-104 hover:shadow-xl border">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuPage = () => {
  return (
    <div>
      
      <MenuHead />
    <div className="container mx-auto px-4 py-8">
      <MenuSection title="Appetizers" items={appetizers} />
      <MenuSection title="Salads" items={salads} />
      {/* Add more sections here */}
      <MenuSection title="Main Entrees" items={mains} />
      <MenuSection title="Sides" items={sides} />
      <MenuSection title="Desserts" items={desserts} />
      <MenuSection title="Drinks" items={drinks} />
    </div>
    </div>
  );
};

export default MenuPage;
