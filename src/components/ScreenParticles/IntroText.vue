<template>
  <div class="name">
    <p>hi, my name is Ivana</p>
    <p>and I'm a Web Developer...<span>|</span></p>
  </div>
</template>

<script>
export default {
  name: "IntroText",
};
</script>

<style scoped>
.name {
  position: absolute;
  right: 17%;
  top: 45%;
  width: auto;
  display: inline-flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 20px 20px 50px 20px;
  z-index: 9;
}
.name p {
  color: white;
  font-size: 50px;
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  /* animation: type 4s steps(60, end); */
  margin: 5px 0;
  font-weight: 600;
}

.name p:nth-child(2) {
  /* animation: type2 8s steps(60, end); */
}

.name span {
  animation: blink 1s infinite;
}

.name::before {
  content: "";
  width: 100%;
  height: 14%;
  background: linear-gradient(45deg, #9d316e, #de2d3e);
  position: absolute;
  left: 2px;
  bottom: 0%;
}

@keyframes type {
  from {
    width: 0;
  }
}

@keyframes type2 {
  0% {
    width: 0;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100;
  }
}

@keyframes blink {
  to {
    opacity: 0;
  }
}

@media screen and (max-width: 1430px) {
  .name {
    right: 10%;
  }
  .name p {
    font-size: 35px;
  }
}
@media screen and (max-width: 768px) {
  .name {
    left: 13%;
    right: 10%;
    top: 40%;
    padding: 0 0 20px 5px;
  }
  .name p {
    font-size: 30px;
  }
}
@media screen and (max-width: 420px) {
  .name {
    left: 5%;
    right: 5%;
  }
  .name p {
    font-size: 25px;
  }
}
</style>
