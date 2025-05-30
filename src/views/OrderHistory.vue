<template>
  <div class="order-history">
    <h1>Order History</h1>
    <div v-if="orders.length === 0" class="no-orders">
      You have no previous orders.
    </div>
    <div v-else class="orders-list">
      <div v-for="order in sortedOrders" :key="order.id" class="order-card">
        <div class="order-summary" @click="toggleDetails(order.id)">
          <div>
            <strong>Order #{{ order.id }}</strong> — 
            <span class="order-date">{{ formatDate(order.date) }}</span>
          </div>
          <div>
            <span class="order-status" :class="order.status.toLowerCase()">{{ order.status }}</span>
            <span class="order-total">\${{ order.total.toFixed(2) }}</span>
            <button class="toggle-btn">{{ expandedOrderId === order.id ? "▲" : "▼" }}</button>
          </div>
        </div>
        <transition name="fade">
          <div v-if="expandedOrderId === order.id" class="order-details">
            <ul>
              <li v-for="item in order.items" :key="item.id">
                {{ item.quantity }} x {{ item.name }} — \${{ item.price.toFixed(2) }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "OrderHistory",
  data() {
    return {
      expandedOrderId: null,
      orders: [
        {
          id: 1023,
          date: '2024-06-01T18:25:43.511Z',
          status: 'Delivered',
          total: 45.92,
          items: [
            { id: 1, name: "Margherita Pizza", quantity: 1, price: 12.99 },
            { id: 2, name: "Caesar Salad", quantity: 2, price: 9.99 },
            { id: 3, name: "Soda", quantity: 1, price: 2.95 }
          ]
        },
        {
          id: 1024,
          date: '2024-06-15T14:12:00.000Z',
          status: 'Cancelled',
          total: 18.50,
          items: [
            { id: 4, name: "Burger", quantity: 1, price: 8.99 },
            { id: 5, name: "Fries", quantity: 1, price: 4.99 },
            { id: 6, name: "Water", quantity: 1, price: 4.52 }
          ]
        },
        {
          id: 1025,
          date: '2024-06-20T20:15:10.000Z',
          status: 'Pending',
          total: 30.00,
          items: [
            { id: 7, name: "Pasta Carbonara", quantity: 1, price: 15.00 },
            { id: 8, name: "Garlic Bread", quantity: 1, price: 5.00 },
            { id: 9, name: "Lemonade", quantity: 2, price: 5.00 }
          ]
        }
      ],
    }
  },
  computed: {
    sortedOrders() {
      return this.orders.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
  methods: {
    formatDate(dateStr) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },
    toggleDetails(orderId) {
      this.expandedOrderId = this.expandedOrderId === orderId ? null : orderId;
    }
  }
}
</script>


<style scoped>
.order-history {
  max-width: 700px;
  margin: 30px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}
h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 700;
}
.no-orders {
  text-align: center;
  color: #999;
  font-style: italic;
}
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.order-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
}
.order-card:hover {
  border-color: #3498db;
}
.order-summary {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  user-select: none;
}
.order-date {
  color: #666;
  font-weight: 400;
}
.order-status {
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 20px;
  color: #fff;
  min-width: 80px;
  text-align: center;
}
.order-status.delivered {
  background-color: #27ae60;
}
.order-status.pending {
  background-color: #f39c12;
}
.order-status.cancelled {
  background-color: #e74c3c;
}
.order-total {
  font-weight: 700;
  margin-right: 15px;
  font-size: 1.1rem;
  color: #2c3e50;
}
.toggle-btn {
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  color: #3498db;
  cursor: pointer;
  user-select: none;
}
.order-details {
  background: #f8f9fa;
  padding: 15px 25px;
  font-size: 0.95rem;
  color: #444;
  border-top: 1px solid #ddd;
}
.order-details ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.order-details li {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}
.order-details li:last-child {
  border-bottom: none;
}

/* Fade transition for order details */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

