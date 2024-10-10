const appetizers = [
  { title: "Spring Rolls", description: "Crispy rolls with mixed vegetables." },
  { title: "Chicken Wings", description: "Spicy buffalo wings served with ranch." }
  // Add more items...
];

const salads = [
  { title: "Caesar Salad", description: "Romaine lettuce with Caesar dressing and croutons." },
  { title: "Greek Salad", description: "Fresh cucumbers, tomatoes, olives, and feta." }
  // Add more items...
];

// Repeat for other sections (Main Entrees, Sides, etc.)
const mains = [
  { title: "Spring Rolls", description: "" },
  { title: "Chicken Wings", description: "" }
  // Add more items...
];

const sides = [
  { title: "Spring Rolls", description: "Crispy rolls with mixed vegetables." },
  { title: "Chicken Wings", description: "Spicy buffalo wings served with ranch." }
  // Add more items...
];

const desserts = [
  { title: "Spring Rolls", description: "Crispy rolls with mixed vegetables." },
  { title: "Chicken Wings", description: "Spicy buffalo wings served with ranch." }
  // Add more items...
];

const drinks = [
  { title: "Spring Rolls", description: "Crispy rolls with mixed vegetables." },
  { title: "Chicken Wings", description: "Spicy buffalo wings served with ranch." }
  // Add more items...
];

const MenuSection = ({ title, items }) => {
  return (
    <div className="menu-section mb-8 px-20">
      <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
        {items.map((item, index) => (
          <div key={index} className="menu-item p-3 bg-white shadow-md rounded-lg">
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
    <div className="container mx-auto px-4 py-8">
      <MenuSection title="Appetizers" items={appetizers} />
      <MenuSection title="Salads" items={salads} />
      {/* Add more sections here */}
      <MenuSection title="Main Entrees" items={mains} />
      <MenuSection title="Sides" items={sides} />
      <MenuSection title="Desserts" items={desserts} />
      <MenuSection title="Drinks" items={drinks} />
    </div>
  );
};

export default MenuPage;
