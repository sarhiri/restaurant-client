import MenuHead from '../components/MenuHead'

const appetizers = [
  { title: "Chicken Pastilla Rolls", description: "Crispy rolls filled with a savory-sweet mixture of spiced chicken, almonds, and cinnamon, wrapped in delicate pastry." },
  { title: "Seafood Pastilla Triangles", description: "A golden, flaky pastry filled with a blend of shrimp, calamari, and white fish, enhanced by Moroccan spices ." },
  { title: "Kefta Spring Rolls", description: "Ground beef or lamb mixed with fresh herbs and spices, wrapped and fried to crispy perfection for a delicious, meaty bite." },
  { title: "Harira soup", description: "A traditional Moroccan soup made with tomatoes, lentils, chickpeas, and spices, commonly enjoyed to break fast during Ramadan." },
  { title: "Lentil Soup", description: "A hearty and flavorful soup made from lentils simmered in a rich broth with cumin, garlic, and herbs." },
  { title: "Fava Bean Soup", description: "A creamy and earthy soup, slow-cooked and blended with tender fava beans, garlic, and fresh herbs for a comforting dish." }
  
];


const salads = [
  { title: "Caesar Salad", description: "Crisp romaine lettuce tossed in a rich and creamy house Caesar dressing, topped with shaved Parmesan and crunchy croutons." },
  { title: "Mediterannean Salad", description: "A refreshing salad with cucumbers, tomatoes, onions, and olives, dressed in olive oil, lemon juice, and fresh herbs." },
  { title: "Za'alouk", description: "A Moroccan eggplant and tomato salad seasoned with garlic, cumin, paprika, and olive oil, served cold or warm." },
  { title: "Hummus", description: "Smooth and creamy chickpea dip, blended with tahini, garlic, and lemon, perfect for pairing with flatbread or vegetables." },
  { title: "Roasted Carrots", description: "Sweet and tender carrots roasted with honey, olive oil, and herbs, adding a caramelized depth of flavor." },
  { title: "Beet Salad", description: "Earthy roasted beets served with tangy goat cheese, fresh greens, and a balsamic vinaigrette." },
  { title: "Roasted Peppers", description: "Smoky and sweet roasted bell peppers marinated in olive oil and garlic, served as a vibrant side dish." },
  { title: "Family Style", description: "A large serving of your choice of salads, perfect for sharing with the whole table." },

  // Add more items...
];

// Repeat for other sections (Main Entrees, Sides, etc.)
const mains = [
  { title: "Moroccan Chicken with Preserved Lemons and olives", description: "A succulent chicken dish slow-cooked with tart preserved lemons and briny green olives, in a rich broth of Moroccan spices." },
  { title: "Roasted Chicken with Apricots, Caramelized Onions and Rasins", description: "A sweet and savory chicken dish that pairs juicy apricots with soft caramelized onions and plump raisins." },
  { title: "Sweet Chicken Couscous", description: "Tender chicken served atop fluffy couscous with a touch of sweetness from cinnamon, raisins, and almonds." },
  { title: "Vegetarian Chicken Couscous", description: "A plant-based take on a classic couscous dish, packed with vegetables and spiced with warm Moroccan flavors." },
  { title: "Traditional Couscous", description: "Fluffy steamed couscous served with a rich vegetable broth, often accompanied by lamb, chicken, or beef." },
  { title: "Tilapia Tajine", description:  "Delicate tilapia fillets slow-cooked in a tajine with tomatoes, onions, and fragrant spices, served with flatbread." },
  { title: "Salmon Tajine", description: "Fresh salmon cooked with herbs, olives, and lemon in a traditional tajine for a light yet flavorful meal." },
  { title: "Lamb with Apricots and Prunes", description: "Tender lamb stewed with dried apricots and prunes, delivering a rich balance of sweetness and spice." },
  { title: "Lamb M'rozia with Caramelized Onions and Rasins", description: "A traditional lamb dish slow-cooked with caramelized onions and raisins, infused with honey and spices." },
  { title: "Marinated Lamb Cutlets", description: "Juicy lamb cutlets marinated in herbs and spices, then grilled to perfection for a smoky, tender bite." },
  { title: "Marinated Lamb Kabob", description: "Skewers of marinated lamb grilled over an open flame, offering bold flavors in every bite." },
  { title: "Kefta Kabab", description: "Ground beef or lamb mixed with Moroccan spices, shaped into skewers, and grilled for a smoky, flavorful treat." },
  { title: "Shakshouka", description: "A North African dish of poached eggs in a spiced tomato and pepper sauce, perfect for brunch or dinner. Served with or without Kefta." },
  { title: "Marinated Shrimp Kabab", description: "Tender shrimp marinated in citrus, garlic, and herbs, grilled to bring out their natural sweetness." },
  { title: "Bocadillo Sandwich", description: "A crusty baguette stuffed with your choice of meat (Sardine/Salami) or vegetables, served with fries and a side salad. " },
  // Add more items...
];

const sides = [
  { title: "Fries", description: "Crispy golden fries, seasoned to perfection, served hot and fresh." },
  { title: "Rice", description: "Steamed fluffy rice, perfect as an accompaniment to any dish." },
  { title: "Plain Couscous", description: "Light and fluffy couscous, a versatile side that pairs well with savory sauces and meats." },
  { title: "Couscous with sauce", description: "Couscous served with a rich and flavorful sauce made from vegetables or meat." },
  { title: "House Bread", description: "Freshly baked bread with a soft interior and crispy crust, ideal for dipping in soups or sauces." },
  { title: "Flat Bread", description: "Soft and chewy flatbread, great for scooping up salads, stews, and dips." },
  { title: "Harissa", description: "A spicy North African chili paste made with roasted red peppers, garlic, and spices, perfect for adding heat to your meal." },
  { title: "Black Olive & Olive Oil Flight", description: "A selection of black olives paired with premium olive oils for dipping or enjoying as a palate cleanser." },
  { title: "Fried Anchovies", description: "Crispy fried anchovies served with a tangy dipping sauce for a crunchy and savory bite." },
  // Add more items...
];

const desserts = [
  { title: "Seffa", description: "A traditional Moroccan dessert made with steamed vermicelli, sweetened with powdered sugar, cinnamon, and almonds." },
  { title: "Ghoriba", description: " Moroccan almond cookies with a crumbly texture and a sweet nutty flavor." },
  { title: "Chebakia", description: "A deep-fried pastry coated in honey and sesame seeds, often enjoyed during festive occasions." },
  { title: "Fruit and Cream Cake", description: "A light and fluffy cake layered with fresh fruits and a smooth cream filling." },
  { title: "Basbousa Cake", description: "A semolina cake soaked in a sweet syrup, often topped with coconut or almonds." },
  { title: "Lemon Olive Oil Cake", description: "A moist and rich cake made with lemon zest and olive oil for a light, refreshing finish." },
  { title: "Baklava", description: "Layers of flaky pastry filled with nuts and drizzled with honey syrup, offering a rich and indulgent dessert." },
  { title: "Chocolate Filled Anise Rolls", description: "Sweet rolls filled with rich chocolate and a hint of anise for a unique flavor combination." },
  // Add more items...
];

const drinks = [
  { title: "Fountain Soda", description: "" },
  { title: "Moroccan Mint Tea", description: "A fragrant blend of green tea and fresh mint leaves, served hot with a touch of sugar." },
  { title: "Espresso", description: "A strong, rich shot of espresso." },
  { title: "Latte", description: "Served hot or iced." },
  { title: "Black Tea", description: "Bold and robust black tea, perfect for tea lovers seeking a comforting drink." },
  { title: "Lemon Mint Smoothie", description: "A refreshing and tangy smoothie made with fresh lemon juice, mint, and a hint of sweetness." },
  { title: "Fruit Smoothie", description: "A chilled blend of seasonal fruits, perfect for a healthy and delicious treat." },
  { title: "Orangina", description: "A lightly carbonated orange beverage with a touch of zest, perfect for quenching your thirst." },
  { title: "Hawaii", description: "Tropical Moroccan soda with notes of pomegranite, mango and passionfruit." },
  { title: "Poms", description: "Moroccan Apple Soda" },
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
