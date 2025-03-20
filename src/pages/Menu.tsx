
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import MenuCategory from '../components/MenuCategory';

const Menu: React.FC = () => {
  const appetizers = [
    {
      name: "Lumpia Shanghai",
      description: "Crispy Filipino spring rolls filled with seasoned ground pork, served with sweet chili dipping sauce.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1625938145744-533b3000ca7d?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      name: "Pork Sisig",
      description: "Sizzling diced pork with onions, chili peppers, and citrus, served on a hot plate.",
      price: "$15.99",
      spicy: true
    },
    {
      name: "Tokwa't Baboy",
      description: "Crispy tofu and pork belly served with soy sauce, vinegar, and onions.",
      price: "$12.99"
    },
    {
      name: "Lumpiang Sariwa",
      description: "Fresh spring rolls with vegetables, wrapped in a thin crepe and topped with peanut sauce.",
      price: "$9.99",
      vegetarian: true
    }
  ];
  
  const soups = [
    {
      name: "Sinigang na Baboy",
      description: "Pork in a sour tamarind soup with vegetables.",
      price: "$14.99",
      featured: true
    },
    {
      name: "Bulalo",
      description: "Beef shank soup with bone marrow, vegetables, and corn.",
      price: "$18.99"
    },
    {
      name: "Tinolang Manok",
      description: "Chicken soup with green papaya, moringa leaves, and ginger.",
      price: "$13.99"
    }
  ];
  
  const mainDishes = [
    {
      name: "Chicken Adobo",
      description: "Tender chicken marinated and simmered in soy sauce, vinegar, garlic, and spices.",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1626253925202-90c33fd9c2a1?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      name: "Lechon Kawali",
      description: "Crispy deep-fried pork belly served with liver sauce.",
      price: "$16.99"
    },
    {
      name: "Kare-Kare",
      description: "Oxtail and vegetables in a rich peanut sauce, served with bagoong (shrimp paste).",
      price: "$18.99"
    },
    {
      name: "Crispy Pata",
      description: "Deep-fried pork knuckle with a crispy skin and tender meat, served with a soy-vinegar dip.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1625399238003-8e526a162692?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Pinakbet",
      description: "Mixed vegetables sautéed with shrimp paste.",
      price: "$12.99",
      vegetarian: true
    },
    {
      name: "Bicol Express",
      description: "Pork cooked in coconut cream with chili peppers and shrimp paste.",
      price: "$15.99",
      spicy: true
    }
  ];
  
  const noodlesAndRice = [
    {
      name: "Pancit Bihon",
      description: "Stir-fried rice noodles with meat and vegetables, seasoned with soy sauce and citrus.",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Pancit Canton",
      description: "Stir-fried egg noodles with meat and vegetables.",
      price: "$13.99"
    },
    {
      name: "Garlic Rice",
      description: "Steamed rice sautéed with garlic.",
      price: "$3.99",
      vegetarian: true
    },
    {
      name: "Plain Rice",
      description: "Steamed white rice.",
      price: "$2.99",
      vegetarian: true
    }
  ];
  
  const desserts = [
    {
      name: "Halo-Halo",
      description: "Mixed shaved ice with sweetened beans, fruits, jellies, leche flan, and purple yam ice cream.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1618711277188-4143831bb36f?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      name: "Leche Flan",
      description: "Filipino-style crème caramel with a rich custard base and caramelized sugar topping.",
      price: "$6.99"
    },
    {
      name: "Buko Pandan",
      description: "Young coconut strips with pandan-flavored jelly in sweet cream.",
      price: "$6.99"
    },
    {
      name: "Turon",
      description: "Sweet banana spring rolls coated in caramelized sugar.",
      price: "$5.99",
      vegetarian: true
    }
  ];
  
  const drinks = [
    {
      name: "Calamansi Juice",
      description: "Freshly squeezed Filipino citrus juice, served sweetened or unsweetened.",
      price: "$3.99",
      vegetarian: true
    },
    {
      name: "Sago't Gulaman",
      description: "Sweet drink with tapioca pearls and grass jelly.",
      price: "$4.99",
      vegetarian: true
    },
    {
      name: "Buko Juice",
      description: "Fresh young coconut water with coconut meat.",
      price: "$4.99",
      vegetarian: true
    },
    {
      name: "San Miguel Beer",
      description: "Popular Filipino beer.",
      price: "$5.99"
    }
  ];
  
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-kainTayo-darkBrown text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1617726663169-791498ef987f?q=80&w=2070&auto=format&fit=crop')` 
            }}
          />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our Menu
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                Discover the rich and diverse flavors of authentic Filipino cuisine.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="/menu.pdf" 
                  download 
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download Menu PDF
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Menu Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Menu Legend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 flex flex-wrap gap-4 items-center justify-center p-6 bg-kainTayo-cream/50 rounded-xl"
              >
                <span className="flex items-center text-sm">
                  <span className="w-3 h-3 inline-block bg-kainTayo-gold rounded-full mr-2"></span>
                  <span className="text-gray-600">Popular Item</span>
                </span>
                <span className="flex items-center text-sm">
                  <span className="w-3 h-3 inline-block bg-kainTayo-red rounded-full mr-2"></span>
                  <span className="text-gray-600">Spicy</span>
                </span>
                <span className="flex items-center text-sm">
                  <span className="w-3 h-3 inline-block bg-kainTayo-green rounded-full mr-2"></span>
                  <span className="text-gray-600">Vegetarian Option</span>
                </span>
              </motion.div>
              
              {/* Menu Categories */}
              <MenuCategory title="Appetizers" items={appetizers} />
              <MenuCategory title="Soups" items={soups} />
              <MenuCategory title="Main Dishes" items={mainDishes} />
              <MenuCategory title="Noodles & Rice" items={noodlesAndRice} />
              <MenuCategory title="Desserts" items={desserts} />
              <MenuCategory title="Drinks" items={drinks} />
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Menu;
