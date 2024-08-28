<template>
  <form>
    <div>
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5"></textarea>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>
