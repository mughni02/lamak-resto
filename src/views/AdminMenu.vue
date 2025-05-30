<template>
  <div class="page admin-menu">
    <h2>Manajemen Menu Restoran</h2>
    <form @submit.prevent="addMenuItem" class="add-menu-form">
      <h3>Tambah Menu Baru</h3>
      <div class="form-group">
        <label for="name">Nama Menu</label>
        <input
          id="name"
          type="text"
          v-model="newItem.name"
          placeholder="Nama menu"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Deskripsi</label>
        <textarea
          id="description"
          v-model="newItem.description"
          placeholder="Deskripsi menu"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="price">Harga (IDR)</label>
        <input
          id="price"
          type="number"
          v-model.number="newItem.price"
          placeholder="Harga menu"
          min="0"
          required
        />
      </div>
      <button type="submit" class="btn-primary">Tambah Menu</button>
    </form>
&nbsp;
&nbsp;

    <div v-if="menuItems.length === 0" class="empty-state">
      <p>Belum ada menu yang terdaftar.</p>
    </div>
&nbsp;
&nbsp;

    <table v-else class="menu-table">
      <thead>
        <tr>
          <th>Nama Menu</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in menuItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ formatCurrency(item.price) }}</td>
          <td>
            <button @click="editItem(item)" class="btn-edit">Edit</button>
            <button @click="deleteItem(item.id)" class="btn-delete">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
&nbsp;
&nbsp;

    <div v-if="editMode" class="edit-modal">
      <div class="modal-content">
        <h3>Edit Menu</h3>
        <form @submit.prevent="updateMenuItem">
          <div class="form-group">
            <label for="edit-name">Nama Menu</label>
            <input
              id="edit-name"
              type="text"
              v-model="editItemData.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="edit-description">Deskripsi</label>
            <textarea
              id="edit-description"
              v-model="editItemData.description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="edit-price">Harga (IDR)</label>
            <input
              id="edit-price"
              type="number"
              v-model.number="editItemData.price"
              min="0"
              required
            />
          </div>
          <div class="modal-actions">
            <button type="submit" class="btn-primary">Perbarui</button>
            <button @click="cancelEdit" type="button" class="btn-cancel">Batal</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AdminMenu",
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "Nasi Goreng Spesial",
          description: "Nasi goreng dengan telur dan ayam suwir",
          price: 25000,
        },
        {
          id: 2,
          name: "Mie Goreng",
          description: "Mie goreng dengan sayuran dan telur",
          price: 20000,
        },
      ],
      newItem: {
        name: "",
        description: "",
        price: null,
      },
      editMode: false,
      editItemData: null,
      editItemIndex: null,
    };
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
    addMenuItem() {
      const newId =
        this.menuItems.length > 0
          ? Math.max(...this.menuItems.map((item) => item.id)) + 1
          : 1;
      const newItem = { ...this.newItem, id: newId };
      this.menuItems.push(newItem);
      this.newItem = { name: "", description: "", price: null };
      alert("Menu baru berhasil ditambahkan.");
    },
    editItem(item) {
      this.editMode = true;
      this.editItemData = { ...item };
      this.editItemIndex = this.menuItems.findIndex((i) => i.id === item.id);
    },
    updateMenuItem() {
      if (this.editItemIndex !== null) {
        this.$set(this.menuItems, this.editItemIndex, { ...this.editItemData });
        alert("Menu berhasil diperbarui.");
        this.cancelEdit();
      }
    },
    cancelEdit() {
      this.editMode = false;
      this.editItemData = null;
      this.editItemIndex = null;
    },
    deleteItem(id) {
      if (confirm("Apakah Anda yakin ingin menghapus menu ini?")) {
        this.menuItems = this.menuItems.filter((item) => item.id !== id);
      }
    },
  },
};
</script>


<style scoped>
.page {
  max-width: 800px;
  margin: 40px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  color: #333;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}


h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
}


.add-menu-form {
  margin-bottom: 30px;
}


.add-menu-form h3 {
  margin-bottom: 15px;
  color: #34495e;
}


.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}


label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #555;
}


input[type="text"],
input[type="number"],
textarea {
  padding: 10px;
  border: 1.8px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  resize: vertical;
}


input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-color: #2980b9;
  outline: none;
}


textarea {
  min-height: 60px;
}


.btn-primary {
  background-color: #2980b9;
  color: #fff;
  padding: 12px 22px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.btn-primary:hover {
  background-color: #1c5980;
}


.menu-table {
  width: 100%;
  border-collapse: collapse;
}


.menu-table th,
.menu-table td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: left;
  vertical-align: middle;
}

.menu-table th {
  background-color: #f5f8fa;
  color: #34495e;
}


.btn-edit,
.btn-delete {
  padding: 6px 12px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
  transition: background-color 0.3s ease;
}


.btn-edit {
  background-color: #27ae60;
  color: white;
}


.btn-edit:hover {
  background-color: #1e8c44;
}


.btn-delete {
  background-color: #e74c3c;
  color: white;
}


.btn-delete:hover {
  background-color: #b43026;
}

.empty-state {
  text-align: center;
  font-style: italic;
  color: #777;
  padding: 30px 0;
}


/* Modal styles */
.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}


.modal-content {
  background: white;
  padding: 25px 30px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.2);
}


.modal-content h3 {
  margin-bottom: 20px;
  color: #2c3e50;
}


.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}


.btn-cancel {
  padding: 10px 18px;
  border: none;
  background: #7f8c8d;
  color: white;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.btn-cancel:hover {
  background-color: #636e70;
}
</style>