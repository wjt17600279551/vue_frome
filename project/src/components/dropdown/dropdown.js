const dropdown = {
  functional: true,
  render(createElment, { children }) {
    let attr = {
      on: {
        beforeEnter(el) {
          el.classList.add("dropdown-transition");
          el.style.height = 0;
          el.style.opacity = 0;
        },
        enter(el) {
          el.style.height = el.scrollHeight;
          el.style.opacity = 1;
        },
        leave(el) {
          el.style.height = 0;
          el.style.opacity = 0;
        }
      }
    }
    return createElment("transition", attr, children)
  }
}

export default dropdown;
