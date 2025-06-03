<template>
  <div class="restaurant-list">
    <h1>Restaurants</h1>
    <div v-if="restaurants.length === 0" class="no-restaurants">
      No restaurants available.
    </div>
    <div class="restaurants-grid">
      <div 
        v-for="restaurant in restaurants" 
        :key="restaurant.id" 
        class="restaurant-card" 
        @click="selectRestaurant(restaurant)"
        tabindex="0"
        @keyup.enter="selectRestaurant(restaurant)"
      >
        <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-image" />
        <div class="restaurant-info">
          <h2 class="restaurant-name">{{ restaurant.name }}</h2>
          <p class="restaurant-cuisine">{{ restaurant.cuisine }}</p>
          <div class="restaurant-rating">
            <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= restaurant.rating }">★</span>
            <span class="rating-number">({{ restaurant.rating.toFixed(1) }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RestaurantList",
  data() {
    return {
      restaurants: [
        {
          id: 1,
          name: "Ampera Kito",
          cuisine: "Minang",
          rating: 4.8,
          image: "https://media.istockphoto.com/id/2157204919/id/foto/rendang-ayam-vegetarian.jpg?s=1024x1024&w=is&k=20&c=KVohkUlgC_ZaBToNqbqNbyGg3qwfqry1oqavF1AhRdQ="
        },
        {
          id: 2,
          name: "Angkringan Nara",
          cuisine: "Java",
          rating: 4.7,
          image: "https://cdn.pixabay.com/photo/2021/03/17/16/28/coffee-time-6102831_1280.jpg"
        },
        {
          id: 3,
          name: "Jus mou",
          cuisine: "Panama",
          rating: 4.4,
          image: "https://cdn.pixabay.com/photo/2021/02/08/20/24/juice-5996425_1280.jpg"
        },
        {
          id: 4,
          name: "Bakso",
          cuisine: "Indian",
          rating: 4.6,
          image: "https://media.istockphoto.com/id/1132252179/id/foto/grilled-indonesian-meatballs-or-bakso-bakar.jpg?s=2048x2048&w=is&k=20&c=zh36vV7NTKjl7sC2WB9WhEB13jbY_Fvp4tSWFl8E3oY="
        }
      ],
    }
  },
  methods: {
    selectRestaurant(restaurant) {
      // For now, just log the selected restaurant
      console.log(`Selected restaurant: ${restaurant.name}`);
      // Placeholder: navigate to restaurant menu or details page here
    }
  }
}
</script>


<style scoped>
.restaurant-list {
  max-width: 900px;
  margin: 30px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}
h1 {
  text-align: center;
  font-weight: 700;
  margin-bottom: 25px;
  color: #34495e;
}
.no-restaurants {
  color: #999;
  text-align: center;
  font-style: italic;
}
.restaurants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
  gap: 20px;
}
.restaurant-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: column;
}
.restaurant-card:hover,
.restaurant-card:focus {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}
.restaurant-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
}
.restaurant-info {
  padding: 15px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.restaurant-name {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #2c3e50;
}
.restaurant-cuisine {
  font-size: 0.95rem;
  color: #7f8c8d;
  margin-bottom: 10px;
  font-style: italic;
}
.restaurant-rating {
  font-size: 1rem;
  color: #f39c12;
  display: flex;
  align-items: center;
  gap: 5px;
}
.star {
  font-size: 1.2rem;
  color: #ccc;
  user-select: none;
}
.star.filled {
  color: #f39c12;
}
.rating-number {
  font-size: 0.85rem;
  color: #34495e;
  margin-left: 4px;
  user-select: none;
}
</style>
