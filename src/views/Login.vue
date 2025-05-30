<template>
  <div class="page login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="Masukkan email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Kata Sandi</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Masukkan kata sandi"
          required
        />
      </div>
      <button type="submit" class="btn-primary">Masuk</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      alert(`Login dengan email: ${this.email} dan password: ${this.password}`);
      this.email = "";
      this.password = "";
    },
  },
};
</script>


<style scoped>
.page {
  max-width: 400px;
  margin: 50px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #34495e;
}

.login-form {
  display: flex;
  flex-direction: column;
}


.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}


label {
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  border: 1.8px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}


input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #2980b9;
  outline: none;
}


.btn-primary {
  margin-top: 10px;
  padding: 12px;
  background-color: #2980b9;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #1c5980;
}
</style>