<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
          Tab contents {{ i }}
          <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">
            Close tab
          </b-button>
          <b-table id="my-table" striped hover 
            :items="posts" 
           
            :per-page="perPage" 
            :current-page="currentPage"
            small>
         </b-table>

        </b-tab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br>
            Open a new tab using the <b>+</b> button above.
          </div>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
      name:"AbhI",
    data() {
      return {
        tabs: [],
        tabCounter: 0,
        // fields: ["userId","id","title","completed"],
        posts:" "
        
        
      }
    },
    methods: {
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
     async newTab() {
        this.tabs.push(this.tabCounter++)
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        this.posts = await response.json();

      }
    }
  }
</script>