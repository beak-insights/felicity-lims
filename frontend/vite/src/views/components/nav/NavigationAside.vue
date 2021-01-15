<template>
  <div class="mx-auto">
    <router-link to="/" id="brand" class="flex items-center md:w-auto pl-6 py-2 text-white">
      <font-awesome-icon icon="meteor" class="text-4xl" />
      <h1 class="text-left text-2xl font-medium ml-2">Felicity LIMS</h1>
    </router-link>
    <nav id="aside-nav" class="" role="navigation">
      <a
        href="/"
        class="flex items-center mt-1 py-2 px-6 bg-gray-600 bg-opacity-25 text-gray-100 border-l-4 border-gray-100"
      >
        <font-awesome-icon icon="tachometer-alt" />
        <span class="mx-4">Dashboard</span>
      </a>
      <a
        href="/"
        class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700"
      >
        <font-awesome-icon icon="user-injured" />
        <span class="mx-4">Patients</span>
      </a>
      <a
        href="/"
        class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700"
      >
        <font-awesome-icon icon="hospital" />
        <span class="mx-4">Clients</span>
      </a>
      <a
        href="/"
        class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700"
      >
        <font-awesome-icon icon="vial" />
        <span class="mx-4">Samples</span>
      </a>
      <a
        href="/"
        class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700"
      >
        <font-awesome-icon icon="briefcase" />
        <span class="mx-4">Worksheets</span>
      </a>
    </nav>
  </div>
</template>