import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  productUrl: string;
}

const products: Product[] = [
  {
    id: "camiseta-furia",
    name: "Camiseta Furia | Adidas Preta",
    price: "R$ 299,00",
    imageSrc: "https://furiagg.fbitsstatic.net/img/p/camiseta-furia-adidas-preta-150263/337479-1.jpg?w=1280&h=1280&v=202503281012",
    productUrl: "https://www.furia.gg/"
  },
  {
    id: "camiseta-infantil",
    name: "Camiseta Infantil Furia | Adidas Preta",
    price: "R$ 259,00",
    imageSrc: "https://furiagg.fbitsstatic.net/img/p/camiseta-infantil-furia-adidas-preta-150264/337486-2.jpg?w=1280&h=1280&v=202503281015",
    productUrl: "https://www.furia.gg/"
  },
  {
    id: "camiseta-oficial",
    name: "Camiseta Oficial Furia | Adidas Preta",
    price: "R$ 359,00",
    imageSrc: "https://furiagg.fbitsstatic.net/img/p/camiseta-oficial-furia-adidas-preta-150265/337491-1.jpg?w=1280&h=1280&v=202503281009",
    productUrl: "https://www.furia.gg/"
  }
];

const StoreSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="furia-container">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Seja Adidas</h2>
          <ShoppingCart className="text-furia-red" size={32} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="h-64 md:h-80 bg-white p-4 flex items-center justify-center">
                <img 
                  src={product.imageSrc} 
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-xl font-bold mb-4">{product.price}</p>
                <a 
                  href={product.productUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="buy-button w-full flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  <span>Comprar agora</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
