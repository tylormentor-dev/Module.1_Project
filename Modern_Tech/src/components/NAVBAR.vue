<template>
  <nav class="navbar">
    <h1 class="logo">ModernTechHR</h1>
    <div class="nav-links">
      <button @click="$router.push('/employees')" :class="['nav-btn', { active: $route.path === '/employees' }]">Employee Names</button>
      <button @click="$router.push('/about')" :class="['nav-btn', { active: $route.path === '/about' }]">Employee Details</button>
    </div>
  </nav>
</template>

<script>
export default { name: "Navbar" }
</script>

<style scoped>
.navbar {
  background: #d2ecff;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #0b4f71;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.logo {
  font-size: 24px;
  font-weight: 700;
  color: #0b4f71;
  letter-spacing: 1px;
}
.nav-links {
  display: flex;
  gap: 20px;
}
.nav-btn {
  background: white;
  border: 2px solid #0b4f71;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: #0b4f71;
  transition: 0.25s;
}
.nav-btn:hover {
  background: #0b4f71;
  color: white;
}
.active {
  background: #0b4f71;
  color: rgb(255, 255, 255);
  box-shadow: 0 0 8px rgba(0, 80, 120, 0.35);
}
</style>