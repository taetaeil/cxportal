<script lang="ts" setup>
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      button
    </h2>
    <div class="flex flex-col gap-2 mt-10 p-10 bg-white rounded-3xl">
      <p>button size는 <em class="font-bold">"sm", "md", "lg"</em>가 있습니다.</p>
      <p><em class="font-bold">icon 이 들어간 버튼</em>에는 <em class="font-bold">class="has-icon"</em>을 추가합니다.</p>
      <p>icon 넣을 때 <em class="font-bold">$type이 line인 경우</em> Icon 컴포넌트가 아닌, <em class="font-bold">svg</em>태그를 사용합니다.
      </p>
    </div>
    <!-- btn__primary -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        btn__primary--{size}
      </mark>
      <div class="flex">
        <button type="button" disabled class="btn__primary--sm">
          버튼
        </button>
        <button type="button" disabled class="btn__primary--md">
          버튼
        </button>
        <button type="button" disabled class="btn__primary--lg">
          버튼
        </button>
        <button type="button" class="btn__primary--sm">
          버튼
        </button>
        <button type="button" class="btn__primary--md">
          버튼
        </button>
        <button type="button" class="btn__primary--lg">
          버튼
        </button>
        <button type="button" class="btn__primary--sm has-icon">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
        <button type="button" class="btn__primary--md has-icon">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
        <button type="button" class="btn__primary--lg has-icon">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
      </div>
    </div>
    <hr>

    <!-- btn__primary-line -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        btn__primary-line--{size}
      </mark>
      <div class="flex">
        <button type="button" disabled class="btn__primary-line--sm">
          버튼
        </button>
        <button type="button" disabled class="btn__primary-line--md">
          버튼
        </button>
        <button type="button" disabled class="btn__primary-line--lg">
          버튼
        </button>
        <button type="button" class="btn__primary-line--sm">
          버튼
        </button>
        <button type="button" class="btn__primary-line--md">
          버튼
        </button>
        <button type="button" class="btn__primary-line--lg">
          버튼
        </button>
        <button type="button" class="btn__primary-line--sm">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.2324" cy="10.4824" r="5.5" stroke="#6724B8" />
            <path d="M14.7324 14.9824L18.268 18.518" stroke="#6724B8" stroke-linecap="round" />
          </svg>
          버튼
        </button>
        <button type="button" class="btn__primary-line--md">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.2324" cy="10.4824" r="5.5" stroke="#6724B8" />
            <path d="M14.7324 14.9824L18.268 18.518" stroke="#6724B8" stroke-linecap="round" />
          </svg>
          버튼
        </button>
        <button type="button" class="btn__primary-line--lg">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.2324" cy="10.4824" r="5.5" stroke="#6724B8" />
            <path d="M14.7324 14.9824L18.268 18.518" stroke="#6724B8" stroke-linecap="round" />
          </svg>
          버튼
        </button>
      </div>
    </div>
    <hr>

    <!-- btn__secondary -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        btn__secondary--{size}
      </mark>
      <div class="flex">
        <button type="button" disabled class="btn__secondary--sm">
          버튼
        </button>
        <button type="button" disabled class="btn__secondary--md">
          버튼
        </button>
        <button type="button" disabled class="btn__secondary--lg">
          버튼
        </button>
        <button type="button" class="btn__secondary--sm">
          버튼
        </button>
        <button type="button" class="btn__secondary--md">
          버튼
        </button>
        <button type="button" class="btn__secondary--lg">
          버튼
        </button>
        <button type="button" class="btn__secondary--sm">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
        <button type="button" class="btn__secondary--md">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
        <button type="button" class="btn__secondary--lg">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
      </div>
    </div>
    <hr>

    <!-- btn__secondary-line -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        btn__secondary-line--{size}
      </mark>
      <div class="flex">
        <button type="button" disabled class="btn__secondary-line--sm">
          버튼
        </button>
        <button type="button" disabled class="btn__secondary-line--md">
          버튼
        </button>
        <button type="button" disabled class="btn__secondary-line--lg">
          버튼
        </button>
        <button type="button" class="btn__secondary-line--sm">
          버튼
        </button>
        <button type="button" class="btn__secondary-line--md">
          버튼
        </button>
        <button type="button" class="btn__secondary-line--lg">
          버튼
        </button>
      </div>
    </div>
    <hr>

    <!-- btn__negative -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        btn__negative--{size}
      </mark>
      <div class="flex">
        <button type="button" disabled class="btn__negative--sm">
          버튼
        </button>
        <button type="button" disabled class="btn__negative--md">
          버튼
        </button>
        <button type="button" disabled class="btn__negative--lg">
          버튼
        </button>
        <button type="button" class="btn__negative--sm">
          버튼
        </button>
        <button type="button" class="btn__negative--md">
          버튼
        </button>
        <button type="button" class="btn__negative--lg">
          버튼
        </button>
        <button type="button" class="btn__negative--sm">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
        <button type="button" class="btn__negative--md">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
        <button type="button" class="btn__negative--lg">
          <Icon name="search__line--fff" width="24" height="24" alt="" />
          버튼
        </button>
      </div>
    </div>
    <hr>

    <!-- btn__negative-line -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        btn__negative-line--{size}
      </mark>
      <div class="flex">
        <button type="button" disabled class="btn__negative-line--sm">
          버튼
        </button>
        <button type="button" disabled class="btn__negative-line--md">
          버튼
        </button>
        <button type="button" disabled class="btn__negative-line--lg">
          버튼
        </button>
        <button type="button" class="btn__negative-line--sm">
          버튼
        </button>
        <button type="button" class="btn__negative-line--md">
          버튼
        </button>
        <button type="button" class="btn__negative-line--lg">
          버튼
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<style lang="scss"></style>
