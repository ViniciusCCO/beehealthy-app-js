/* eslint-disable func-names */
/* eslint-disable prefer-spread */
// eslint-disable-next-line no-extend-native
Array.prototype.remove = function(from, to) {
  // eslint-disable-next-line react/no-this-in-sfc
  const rest = this.slice((to || from) + 1 || this.length)
  // eslint-disable-next-line react/no-this-in-sfc
  this.length = from < 0 ? this.length + from : from
  // eslint-disable-next-line react/no-this-in-sfc
  return this.push.apply(this, rest)
}
