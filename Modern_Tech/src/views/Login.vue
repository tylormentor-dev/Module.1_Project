<template>
  <div class="login-container">
    <form class="login-box" @submit.prevent="login">
      <h2>Login Page</h2>
    <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" />
        <br/>
        <label for="password"> Password</label>
        <input type="password" v-model="password" name="password" />
        <br/>
        <button type="submit">Submit</button>
    </div>
    <nav>
    <router-link to="/login"></router-link>
    </nav>
    <p v-if="error">{{ error }}</p>
    </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    login() {
      this.error = "";

 
      const validUser = {
        email: "admin@user.com",
        password: "1234"
      };

      if (this.email === validUser.email && this.password === validUser.password) {
        
        localStorage.setItem("loggedIn", "true");

        
        this.$router.push("/payroll");
      } else {
        this.error = "Invalid username or password";
      }
    },
  },
};
</script>

<style scoped>
 .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, button {
  padding: 8px;
  width: 100%;
}

button {
  cursor: pointer;
}

.error {
  color: red;
  font-size: 14px;
}
</style>