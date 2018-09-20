<template>
  <a
    v-if="external"
    :class="classNames"
    :href="to"
    :target="external ? '_blank' : false"
    rel="noopener noreferrer"
    @click="trackLink"
    @keyup.enter="trackLink">
    <slot />
  </a>
  <nuxt-link
    v-else
    :to="to"
    :class="classNames">
    <slot/>
  </nuxt-link>

</template>

<script>
export default {
  name: 'ILink',
  props: {
    to: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      default: false
    },
    important: {
      type: Boolean,
      default: false
    },
    iconLink: {
      type: Boolean,
      default: false
    },
    navLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      const {
        // props
        iconLink,
        navLink,
        important,
        // css module props (alias where neccessary)
        $style: {
          link,
          important: importantClass,
          'icon-link': iconLinkClass,
          'nav-link': navLinkClass,
          'text-link': textLink
        }
      } = this
      return [
        link,
        {
          [textLink]: !iconLink,
          [importantClass]: important,
          [navLinkClass]: navLink,
          [iconLinkClass]: iconLink
        }
      ]
    }
  },
  methods: {
    trackLink() {
      this.$ga.event('External links', 'click', this.to)
    }
  }
}
</script>

<style module>
/* bootstrap resets */
.link:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}
.link:not([href]):not([tabindex]):hover,
.link:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}
.link:not([href]):not([tabindex]):focus {
  outline: 0;
}
/* end bootstrap resets */
.text-link,
.text-link > * {
  color: var(--dark-gray);
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  font-weight: 700;
  transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
}
.text-link:hover,
.text-link:hover > * {
  color: var(--bright-green);
}
.important {
  color: var(--bright-green);
}
.important:hover {
  color: var(--dark-green);
}
.icon-link > svg {
  display: flex;
  fill: var(--dark-gray);
  width: 30px;
  height: 30px;
  transition: fill 0.2s ease-in-out;
}
.icon-link:hover > svg {
  fill: var(--bright-green);
}
.nav-link {
  text-transform: uppercase;
}
</style>
