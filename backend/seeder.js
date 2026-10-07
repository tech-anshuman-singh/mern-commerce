const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const Product = require('./models/productModel');
const User = require('./models/userModel');
const connectDatabase = require('./config/database');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const isDestroy = process.argv.includes('-d');

const sampleProducts = [
    {
        name: 'Realme 9 Pro 5G (Aurora Green, 128 GB) (6 GB RAM)',
        description: 'Experience smooth and fast performance with the Realme 9 Pro 5G smartphone.',
        highlights: [
            '6 GB RAM | 128 GB ROM | Expandable Upto 256 GB',
            '16.76 cm (6.6 inch) Full HD+ Display',
            '64MP + 8MP + 2MP | 16MP Front Camera',
            '5000 mAh Lithium Ion Battery',
            'Qualcomm Snapdragon 695 Processor',
        ],
        specifications: [
            { title: 'In The Box', description: 'Handset, Adapter, USB Cable, Important Info Booklet' },
            { title: 'Model Number', description: 'RMX3471' },
            { title: 'Model Name', description: '9 Pro 5G' },
        ],
        price: 18999,
        cuttedPrice: 21999,
        images: [
            {
                public_id: 'phone1',
                url: 'https://rukminim1.flixcart.com/image/416/416/kzsqyvk0/mobile/x/p/4/-original-imagbpfcfzmfq82n.jpeg?q=70',
            },
        ],
        brand: {
            name: 'Realme',
            logo: {
                public_id: 'realme_logo',
                url: 'https://rukminim1.flixcart.com/www/100/100/promos/29/03/2022/b77f98d4-539c-49ed-a92c-8515cff67055.png?q=90',
            },
        },
        category: 'Mobiles',
        stock: 10,
        warranty: 1,
    },
    {
        name: 'ASUS TUF Gaming F15 Core i5 10th Gen',
        description: 'Level up your gaming experience with the ASUS TUF Gaming F15 laptop.',
        highlights: [
            'Intel Core i5 Processor (10th Gen)',
            '8 GB DDR4 RAM',
            '64 bit Windows 11 Operating System',
            '512 GB SSD',
            '39.62 cm (15.6 inch) Display',
        ],
        specifications: [
            { title: 'In The Box', description: 'Laptop, Power Adaptor, User Guide, Warranty Documents' },
            { title: 'Model Number', description: 'FX506LH-HN258W' },
            { title: 'Part Number', description: '90NR03U1-M008G0' },
        ],
        price: 54990,
        cuttedPrice: 70990,
        images: [
            {
                public_id: 'laptop1',
                url: 'https://rukminim1.flixcart.com/image/416/416/l3rmzcw0/computer/j/x/r/-original-imagbpfcfzmfq82n.jpeg?q=70',
            },
        ],
        brand: {
            name: 'ASUS',
            logo: {
                public_id: 'asus_logo',
                url: 'https://rukminim1.flixcart.com/www/100/100/promos/29/03/2022/2c83ff04-3701-4be6-a492-cb8a946b5a3e.png?q=90',
            },
        },
        category: 'Laptops',
        stock: 5,
        warranty: 2,
    },
];

const seedData = async () => {
    try {
        await connectDatabase();

        if (isDestroy) {
            await Product.deleteMany();
            await User.deleteMany();
            console.log('Data destroyed');
            return;
        }

        await Product.deleteMany();
        await User.deleteMany();
        console.log('Previous data destroyed');

        const adminUser = await User.create({
            name: 'Admin User',
            email: 'admin@flipkart.com',
            gender: 'Male',
            password: 'password123',
            role: 'admin',
            avatar: {
                public_id: 'avatar_id',
                url: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
            },
        });

        const products = sampleProducts.map((product) => ({
            ...product,
            user: adminUser._id,
        }));

        await Product.insertMany(products);
        console.log('Data Imported!');
    } catch (error) {
        console.error('Error with imported data:', error);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    }
};

seedData();
