<template>
  <div class="page admin-orders">
    <h2>Daftar Pesanan</h2>
    <div v-if="orders.length === 0" class="empty-state">
      <p>Belum ada pesanan yang masuk.</p>
    </div>
    <table v-else class="orders-table">
      <thead>
        <tr>
          <th>No. Pesanan</th>
          <th>Tanggal</th>
          <th>Nama Pelanggan</th>
          <th>Total Harga</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ formatCurrency(order.total) }}</td>
          <td :class="statusClass(order.status)">{{ order.status }}</td>
          <td>
            <select v-model="order.status" @change="updateStatus(order)">
              <option>Selesai</option>
              <option>Dalam Proses</option>
              <option>Batal</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "AdminOrders",
  data() {
    return {
      orders: [
        {
          id: "ORD-1001",
          date: "2024-06-01",
          customer: "Budi Santoso",
          total: 150000,
          status: "Dalam Proses",
        },
        {
          id: "ORD-1002",
          date: "2024-06-02",
          customer: "Ani Wijaya",
          total: 200000,
          status: "Selesai",
        },
      ],
    };
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
    statusClass(status) {
      switch (status.toLowerCase()) {
        case "selesai":
          return "status-finished";
        case "dalam proses":
          return "status-processing";
        case "batal":
          return "status-cancelled";
        default:
          return "";
      }
    },
    updateStatus(order) {
      alert(
        `Status pesanan ${order.id} diperbarui menjadi: ${order.status}`
      );
      // Biasanya update status pesanan ke backend
    },
  },
};
</script>


<style scoped>
.page {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.1);
}


h2 {
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}


.empty-state {
  text-align: center;
  font-style: italic;
  color: #777;
  padding: 40px 0;
}


.orders-table {
  width: 100%;
  border-collapse: collapse;
}


.orders-table th,
.orders-table td {
  border: 1px solid #ddd;
  padding: 12px 16px;
  text-align: left;
  vertical-align: middle;
}


.orders-table th {
  background-color: #f5f8fa;
  color: #34495e;
}


select {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1.8px solid #ccc;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  transition: border-color 0.3s ease;
}


select:focus {
  border-color: #2980b9;
}


/* Status colors */
.status-finished {
  color: green;
  font-weight: 600;
}


.status-processing {
  color: #e67e22;
  font-weight: 600;
}


.status-cancelled {
  color: red;
  font-weight: 600;
}
</style>