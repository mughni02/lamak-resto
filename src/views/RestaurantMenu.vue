<template>
  <div class="restaurant-menu">
    <h1>{{ restaurantName }} Menu</h1>
    <div v-if="menu.length === 0" class="no-menu">
      No menu available currently.
    </div>
    <div v-else class="menu-categories">
      <section v-for="category in menu" :key="category.id" class="menu-category">
        <h2 class="category-title">{{ category.name }}</h2>
        <div class="dishes-grid">
          <div v-for="dish in category.dishes" :key="dish.id" class="dish-card">
            <div class="dish-info">
              <h3 class="dish-name">{{ dish.name }}</h3>
              <p class="dish-description">{{ dish.description }}</p>
              <div class="dish-footer">
                <span class="dish-price">\${{ dish.price.toFixed(2) }}</span>
                <button class="add-btn" @click="addToCart(dish)">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
&nbsp;
&nbsp;

<script>
export default {
  name: "RestaurantMenu",
  data() {
    return {
      restaurantName: "Ampera Kito",
      menu: [
        {
          id: 1,
          name: "Starters",
          dishes: [
            {
              id: 101,
              name: "Paket Keluarga",
              description: "Nasi, Teh ES, Ikan Bakar, Lalapan",
              price: 500.000
            },
            {
              id: 102,
              name: "Paket couple",
              description: "Nasi, teh es, ayam bakar.",
              price: 200.000
            }
          ]
        },
        {
          id: 2,
          name: "Angkringan Ndeso",
          dishes: [
            {
              id: 201,
              name: "Seblak",
              description: "Aneka seblak.",
              price: 15.000
            },
            {
              id: 202,
              name: "bakaran",
              description: "Aneka Bakaran.",
              price: 20.000
            }
          ]
        },
        {
          id: 3,
          name: "Jus mou",
          dishes: [
            {
              id: 301,
              name: "sop buah",
              description: "mix aneka buah.",
              price: 12.000
            },
            {
              id: 302,
              name: "jus apel",
              description: "Apel segar tanpa manisan.",
              price: 10.000
            }
          ]
        }
      ]
    }
  },
  methods: {
    addToCart(dish) {
      // placeholder action - in real app, you would update cart state or emit event
      console.log(`Added to cart: ${dish.name} - $${dish.price.toFixed(2)}`);
      alert(`Added "${dish.name}" to your cart.`);
    }
  }
}
</script>


<style scoped>
.restaurant-menu {
  max-width: 860px;
  margin: 30px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
  color: #34495e;
}
.no-menu {
  text-align: center;
  font-style: italic;
  color: #999;
}
.menu-category {
  margin-bottom: 40px;
}
.category-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 6px;
  color: #2980b9;
}
.dishes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 20px;
}
.dish-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.dish-card:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transform: translateY(-6px);
}
.dish-info {
  flex-grow: 1;
}
.dish-name {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: #2c3e50;
}
.dish-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 15px;
  min-height: 40px;
}
.dish-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dish-price {
  font-weight: 700;
  color: #27ae60;
  font-size: 1.1rem;
}
.add-btn {
  background-color: #3498db;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-btn:hover {
  background-color: #2980b9;
}
</style>