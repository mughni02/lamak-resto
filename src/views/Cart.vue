<template>
  <div class="page cart">
    <h2>Keranjang Belanja</h2>
    <div v-if="cartItems.length === 0" class="empty-state">
      <p>Keranjang Anda masih kosong.</p>
    </div>
    <table v-else class="cart-table">
      <thead>
        <tr>
          <th>Menu</th>
          <th>Jumlah</th>
          <th>Harga Satuan</th>
          <th>Subtotal</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <input
              type="number"
              min="1"
              v-model.number="item.quantity"
              @change="updateQuantity(item)"
            />
          </td>
          <td>{{ formatCurrency(item.price) }}</td>
          <td>{{ formatCurrency(item.price * item.quantity) }}</td>
          <td>
            <button @click="removeItem(item)" class="btn-remove">Hapus</button>
          </td>
        </tr>
        <tr class="total-row">
          <td colspan="3"><strong>Total</strong></td>
          <td colspan="2"><strong>{{ formatCurrency(totalPrice) }}</strong></td>
        </tr>
      </tbody>
    </table>
    <div v-if="cartItems.length > 0" class="checkout-container">
      <button @click="checkout" class="btn-primary">Lanjut ke Pembayaran</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: "Gulai Tunjang",
          price: 25000,
          quantity: 2,
        },
        {
          id: 2,
          name: "Sop Buah",
          price: 8000,
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
    },
    removeItem(item) {
      this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
    },
    checkout() {
      alert(
        `Total pembayaran: ${this.formatCurrency(this.totalPrice)}\nLanjut ke proses pembayaran.`
      );
    },
  },
};
</script>


<style scoped>
.page {
  max-width: 750px;
  margin: 40px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  color: #333;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}


h2 {
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

.empty-state {
  padding: 30px 0;
  text-align: center;
  color: #777;
  font-style: italic;
}


.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}


.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
  vertical-align: middle;
}


.cart-table th {
  background-color: #f5f8fa;
  color: #34495e;
}


input[type="number"] {
  width: 60px;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s ease;
}


input[type="number"]:focus {
  border-color: #2980b9;
  outline: none;
}


.btn-remove {
  padding: 6px 12px;
  background: #e74c3c;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.btn-remove:hover {
  background-color: #b43026;
}


.total-row td {
  font-size: 18px;
  font-weight: 700;
  color: #2c3e50;
  text-align: right;
}


.checkout-container {
  text-align: right;
}


.btn-primary {
  background-color: #2980b9;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.btn-primary:hover {
  background-color: #1c5980;
}
</style>