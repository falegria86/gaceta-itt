<template>
  <Navbar />
  <div class="container flex mx-auto justify-center">
    <flipbook
      :pages="pages"
      v-slot="flipbook"
      class="flipbook"
      :pagesHiRes="pagesHiRes"
    >
      <div class="flex justify-center mb-0 md:mb-[10px] gap-[10px]">
        <span
          class="material-symbols-outlined cursor-pointer"
          @click="flipbook.flipLeft"
        >
          arrow_back_ios
        </span>
        <span
          class="material-symbols-outlined cursor-pointer"
          @click="flipbook.flipRight"
        >
          arrow_forward_ios
        </span>
      </div>
    </flipbook>
  </div>
  <Footer class="mt-[60px]" />
</template>

<script setup>
import Flipbook from "flipbook-vue";

const pages = [
  null,
  "https://i.ibb.co/7SZndM7/1.jpg",
  "https://i.ibb.co/5nQZzN9/2.jpg",
  "https://i.ibb.co/XVZQctT/3.jpg",
  "https://i.ibb.co/cCL8RVp/4.jpg",
  "https://i.ibb.co/QnN9kqr/5.jpg",
  "https://i.ibb.co/Qj4XHTh/6.jpg",
  "https://i.ibb.co/pK5WBhp/7.jpg",
  "https://i.ibb.co/M6ypCcS/8.jpg",
  "https://i.ibb.co/DgKv8Cj/9.jpg",
  "https://i.ibb.co/0qhp2v4/10.jpg",
  "https://i.ibb.co/sWshPLw/11.jpg",
  "https://i.ibb.co/BNdSrZF/12.jpg",
  "https://i.ibb.co/r0vZf2g/13.jpg",
  "https://i.ibb.co/PG9q88m/14.jpg",
  "https://i.ibb.co/K6VJFBk/15.jpg",
  "https://i.ibb.co/G04hfjZ/16.jpg",
  "https://i.ibb.co/zV6BCZz/17.jpg",
  "https://i.ibb.co/0m0MxwH/18.jpg",
  "https://i.ibb.co/F45KbL5/19.jpg",
  "https://i.ibb.co/H2sw2kX/20.jpg",
  "https://i.ibb.co/cJHZxN2/21.jpg"

];

const pagesHiRes = [
  null,
  "https://i.ibb.co/njSwjfF/1.jpg",
  "https://i.ibb.co/kHNwFth/2.jpg",
  "https://i.ibb.co/M15xdWd/3.jpg",
  "https://i.ibb.co/R2vQhHH/4.jpg",
  "https://i.ibb.co/tQMFDVv/5.jpg",
  "https://i.ibb.co/0hty6CC/6.jpg",
  "https://i.ibb.co/MZT4wGX/7.jpg",
  "https://i.ibb.co/Gp8NnmK/8.jpg",
  "https://i.ibb.co/4KJX7BF/9.jpg",
  "https://i.ibb.co/PG6yKpZ/10.jpg",
  "https://i.ibb.co/WBW79V7/11.jpg",
  "https://i.ibb.co/MRXhSnm/12.jpg",
  "https://i.ibb.co/6mbRVqG/13.jpg",
  "https://i.ibb.co/2yHP0kY/14.jpg",
  "https://i.ibb.co/nLqgrP3/15.jpg",
  "https://i.ibb.co/7RjH3WQ/16.jpg",
  "https://i.ibb.co/0ykDpvX/17.jpg",
  "https://i.ibb.co/G0BwHR2/18.jpg",
  "https://i.ibb.co/xSwSsbv/19.jpg",
  "https://i.ibb.co/tzVr9rs/20.jpg",
  "https://i.ibb.co/jgTVrPN/21.jpg"
];
</script>

<style scoped>
.flipbook {
  width: 90vw;
  height: 90vh;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<!-- Puede necesitarse -->
<!-- @flip-left-start="onFlipLeftStart"
@flip-left-end="onFlipLeftEnd"
@flip-right-start="onFlipRightStart"
@flip-right-end="onFlipRightEnd"
@zoom-start="onZoomStart"
@zoom-end="onZoomEnd"
:startPage="pageNum"
     -->
