<template>
  <div>
      
    <b-card no-body>
      <b-nav pills card-header slot="header" v-b-scrollspy:nav-scroller>
        <b-nav-item href="#fat" @click="scrollIntoView" class='w-50'>@fat</b-nav-item>
        <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
        <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
          <b-dropdown-item href="#one" @click="scrollIntoView"
            >one</b-dropdown-item
          >
          <b-dropdown-item href="#two" @click="scrollIntoView"
            >two</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#three" @click="scrollIntoView"
            >three</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item href="#pi0" @click="scrollIntoView">@pi0</b-nav-item>
      </b-nav>

      <b-card-body
        id="nav-scroller"
        ref="content"
        style="position: relative; height: 300px; overflow-y: scroll"
      >
        <p>{{ text }}</p>
        <h4 id="fat">@fat</h4>
        <p>{{ text1 }}</p>
        <h4 id="mdo">@mdo</h4>
        <p >{{ text2 }}</p>
        <h4 id="one">one</h4>
        <p >{{ text }}</p>
        <h4 id="two">two</h4>
        <p>{{ text1 }}</p>
        <h4 id="three">three</h4>
        <p>{{ text2 }}</p>
        <h4 id="pi0">@pi0</h4>
        <p >{{ text1 }}</p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
    name:"AbhI",
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
    scrollIntoView(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
  data() {
    return {
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
        text1: `
          Gandhi referred to "God" as "Truth," which has great significance. 
          His mission was not only to humanize religion, but also to moralize it. 
          Gandhi's interpretation of Hinduism, Islam, and Christianity made his religion a 
          federation of different religious faiths.
          
        `,
         text2: `
            During her lifetime Mother Teresa became famous as the Catholic nun who dedicated her life 
            to caring for the destitute and dying in the slums of Calcutta - now known as Kolkata..
        `,
    };
  },
};
</script>