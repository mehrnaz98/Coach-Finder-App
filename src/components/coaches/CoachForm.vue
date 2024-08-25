<template>
  <form>
    <div class="form-control">
      <label for="firstName">Firstname</label>
      <input type="text" id="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Lastname</label>
      <input type="text" id="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" row="5"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="Backend" value="Backend" />
        <label for="frontend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>
