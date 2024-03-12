import {products} from "../../data";

async function seedProducts(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "products" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          profileImage VARCHAR(255) NOT NULL,
          productImage VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          price INT NOT NULL,
          oldPrice INT NOT NULL,
          rating INT NOT NULL,
          reviews INT NOT NULL,
          inStock boolean NOT NULL,
          description TEXT NOT NULL,
          images 
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
  
      console.log(`Created "products" table`);
  
      // Insert data into the "products" table
      const insertedProducts = await Promise.all(
        products.map(async (product) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql`
          INSERT INTO products (id, name, email, password)
          VALUES (${product.id}, ${product.name}, ${product.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedProducts.length} products`);
  
      return {
        createTable,
        products: insertedProducts,
      };
    } catch (error) {
      console.error('Error seeding products:', error);
      throw error;
    }
  }