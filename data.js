const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('admin@gmail.com', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'john@gmail.com',
            password: bcrypt.hashSync('cookies', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            category: 'Shirts',
            name: 'Nike Slim Shirt',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'Slim fit. The model (height 6) is wearing a size 40',
        },
        {
            category: 'Shirts',
            name: 'Adidas Slim Shirt',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 11,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'Slim fit. The model (height 6) is wearing a size 40',
        },
        {
            category: 'Shirts',
            name: 'Lacoste Slim Shirt',
            image: '/images/p3.jpg',
            price: 200,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'Slim fit. The model (height 6) is wearing a size 40',
        },
        {
            category: 'Pants',
            name: 'Nike Slim Pant',
            image: '/images/p4.jpg',
            price: 85,
            countInStock: 5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 13,
            description: 'Slim fit. The model (height 6) is wearing a size 42',
        },
        {
            category: 'Pants',
            name: 'Puma Slim Pant',
            image: '/images/p5.jpg',
            price: 90,
            countInStock: 2,
            brand: 'Puma',
            rating: 3.9,
            numReviews: 11,
            description: 'Slim fit. The model (height 6) is wearing a size 40',
        },
        {
            category: 'Pants',
            name: 'Adidas Fit Pant',
            image: '/images/p6.jpg',
            price: 70,
            countInStock: 21,
            brand: 'Nike',
            rating: 3.9,
            numReviews: 21,
            description: 'Regular fit. The model (height 6) is wearing a size 40',
        },
    ]
};

exports.data = data;