<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-foreground">Publication Preferences</h2>
    </div>

    <div class="rounded-md border border-border p-6">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <h3 class="text-lg font-medium text-foreground">Email Notifications</h3>
          <button
            class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Configure
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <h3 class="text-lg font-medium text-foreground">SMS Notifications</h3>
          <button
            class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Configure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
