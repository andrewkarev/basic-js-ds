function removeKFromList(l, k) {
  while (l.value === k) {
    l = l.next;
  }

  let current = l;

  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
