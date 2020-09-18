<template>
  <div class="main-wrapper">
    <div class="container">
      <!-- keep-alive - сохранения состояния компонентов при изменении url -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-wrapper", // Обязательный компонент
  props: {}, //Не персональные данные компонента, то что будет прилетать от родителя этого компонента
  data() {
    // Персональные данные этого компонента
    return {
      title: "Main Wrapper",
    };
  },
};
</script>
<style>
.main-wrapper {
  padding: 40px 0;
}
</style>
