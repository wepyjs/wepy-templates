

export default {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    mixintap () {
      this.mixin = 'MixinText' + (Math.random() + '').substring(3, 7);
      console.log('mixin method tap');
    }
  },
  created () {
    console.log('created in mixin');
  }
}
