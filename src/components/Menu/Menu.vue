<template>
  <nav class="menu">
    <a href="#about" class="menu__item" @click="makeActive">About</a>
    <a href="#skills" class="menu__item" @click="makeActive">Skills</a>
    <a href="#portfolio" class="menu__item" @click="makeActive">Portfolio</a>
    <a href="#contact" class="menu__item" @click="makeActive">Contact</a>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    active: {
      type: String,
      default: "",
      required: false,
    },
  },
  methods: {
    makeActive: function (item) {
      this.active = item;
    },
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  z-index: 5;
  display: flex;
  font-size: 3em;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .menu {
    padding-left: 10%;
    font-size: 3.5em;
    flex-direction: column;
  }
}
@media screen and (min-width: 1600px) {
  .menu {
    font-size: 3.5em;
  }
}
.menu .menu__item {
  color: #fff;
  line-height: 1.25;
  text-transform: lowercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 6px;
  transition: all 0.2s ease-in-out;
  position: relative;
  margin: 0 5% 0 0;
  font-size: 40px;
  text-decoration: none;
}
.menu .menu__item span {
  transition: all 0.2s ease-in-out;
}
.menu .menu__item:before {
  content: "";
  width: 70%;
  height: 33%;
  background: linear-gradient(45deg, #f19872, #e86c9a);
  position: absolute;
  left: 2px;
  bottom: 4%;
  z-index: -1;
  opacity: 1;
  transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1),
    width 1s cubic-bezier(0.2, 1, 0.3, 1) 0.7s,
    opacity 0.8s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
}
.menu .menu__item:nth-child(2)::before {
  background: linear-gradient(45deg, #0947db, #07d89d);
}
.menu .menu__item:nth-child(3)::before {
  background: linear-gradient(45deg, #ee2d29, #f8ae2c);
}
.menu .menu__item:nth-child(4)::before {
  background: linear-gradient(45deg, #3a3d98, #6f22b9);
}
.menu .menu__item:nth-child(5)::before {
  background: linear-gradient(45deg, #9d316e, #de2d3e);
}
.menu .menu__item:nth-child(6)::before {
  background: linear-gradient(45deg, #00ac53, #23c3e0);
}
.menu .menu__item:hover::before {
  height: 6%;
  transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}
</style>
