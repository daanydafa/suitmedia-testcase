<template>
  <header :class="headerClass">
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
      <ul>
        <li>
          <router-link to="/work" class="nav-link" active-class="active">Work</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li>
          <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
        </li>
        <li>
          <router-link to="/ideas" class="nav-link" active-class="active">Ideas</router-link>
        </li>
        <li>
          <router-link to="/careers" class="nav-link" active-class="active">Careers</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lastScrollY: 0,
      headerClass: 'header',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); 
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY && currentScrollY > 80) {
        this.headerClass = 'header hidden';
      } else {
        if (currentScrollY < 80) this.headerClass = 'header';
        else this.headerClass = 'header transparent';
      }

      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(236, 106, 49);
  z-index: 1000;
  padding-block: 14px;
  transition: top 0.3s, opacity 0.3s;
}

.header.hidden {
  top: -70px;
}

.header.transparent {
  opacity: 0.8;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 7rem;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: white;
  margin: 0;
  padding: 0;
  height: 100%;
}

li {
  margin-inline-start: 1rem;
  display: inline-block;
  position: relative;
}

.logo img {
  height: 40px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.nav-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: transparent;
  bottom: 0;
  left: 0;
  transform: translateY(3px) scaleY(0);
  transform-origin: bottom;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::before {
  transform: translateY(0) scaleY(0.7);
  background-color: white;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
