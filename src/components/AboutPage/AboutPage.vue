<template>
  <div class="about">
    <button class="content-close">X</button>
    <div class="image"><img src="../../assets/profile.jpg" /></div>
    <div class="intro">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
      <dl>
        <dt>Definition list</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  background: linear-gradient(45deg, #0947db, #07d89d);
  min-height: 100%;
  display: flex;
  padding: 0 15%;
  align-items: center;
  gap: 5%;
}
.content-close {
  position: absolute;
  bottom: 25px;
  right: 40px;
  color: #fff;
  border: 0;
  border-radius: 90% 70% 88% 69%;
  padding: 10px 15px;
  height: 80px;
  width: 70px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 2px 3px 0 9px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: box-shadow 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}
.content-close:focus {
  outline: 0;
}
.content-close:hover {
  box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}
img {
  width: auto;
  height: 400px;
  border-radius: 50%;
}
</style>
