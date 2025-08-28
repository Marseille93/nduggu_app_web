import { Product, Category, User, Order } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fruits',
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg',
    color: 'bg-orange-100'
  },
  {
    id: '2',
    name: 'Légumes',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    color: 'bg-green-100'
  },
  {
    id: '3',
    name: 'Céréales',
    image: 'https://images.pexels.com/photos/1378424/pexels-photo-1378424.jpeg',
    color: 'bg-yellow-100'
  },
  {
    id: '4',
    name: 'Produits Laitiers',
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg',
    color: 'bg-blue-100'
  },
  {
    id: '5',
    name: 'Viandes',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg',
    color: 'bg-red-100'
  },
  {
    id: '6',
    name: 'Épices',
    image: 'https://images.pexels.com/photos/161556/background-bitter-breakfast-bright-161556.jpeg',
    color: 'bg-amber-100'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Tomates cerises bio',
    description: 'Tomates cerises cultivées sans pesticides, parfaites pour vos salades',
    price: 4.50,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    category: 'Légumes',
    stock: 25,
    supplier: 'Ferme Bio du Soleil',
    badges: ['bio', 'local'],
    rating: 4.8,
    reviews: 32
  },
  {
    id: '2',
    name: 'Bananes équitables',
    description: 'Bananes issues du commerce équitable, mûries naturellement',
    price: 3.20,
    image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg',
    category: 'Fruits',
    stock: 50,
    supplier: 'Tropical Fair Trade',
    badges: ['bio'],
    rating: 4.6,
    reviews: 28
  },
  {
    id: '3',
    name: 'Carottes de saison',
    description: 'Carottes fraîches récoltées cette semaine dans nos champs',
    price: 2.80,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    category: 'Légumes',
    stock: 40,
    supplier: 'Maraîcher Local',
    badges: ['local', 'nouveau'],
    rating: 4.9,
    reviews: 45
  },
  {
    id: '4',
    name: 'Pommes Golden',
    description: 'Pommes Golden croquantes et sucrées, idéales pour toute la famille',
    price: 3.90,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg',
    category: 'Fruits',
    stock: 35,
    supplier: 'Verger des Collines',
    badges: ['local'],
    rating: 4.7,
    reviews: 22
  },
  {
    id: '5',
    name: 'Lait fermier',
    description: 'Lait frais de vaches élevées au pâturage, collecté quotidiennement',
    price: 1.85,
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
    category: 'Produits Laitiers',
    stock: 30,
    supplier: 'Ferme Laitière Martin',
    badges: ['local'],
    rating: 4.9,
    reviews: 67
  },
  {
    id: '6',
    name: 'Quinoa bio',
    description: 'Quinoa bio riche en protéines, parfait pour une alimentation saine',
    price: 8.50,
    image: 'https://images.pexels.com/photos/793771/pexels-photo-793771.jpeg',
    category: 'Céréales',
    stock: 20,
    supplier: 'Graines du Monde Bio',
    badges: ['bio'],
    rating: 4.5,
    reviews: 18
  }
];

export const mockUser: User = {
  id: '1',
  firstName: 'Marie',
  lastName: 'Dubois',
  email: 'marie.dubois@email.com',
  role: 'client'
};

export const mockOrders: Order[] = [
  {
    id: '1',
    user: mockUser,
    items: [
      { product: products[0], quantity: 2 },
      { product: products[1], quantity: 1 }
    ],
    total: 12.20,
    status: 'delivered',
    date: '2024-12-15'
  }
];