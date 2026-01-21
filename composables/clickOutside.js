import { onBeforeUnmount, onMounted } from "vue";

export default function useClickOutside(component, callback, excludeComponent) {
  // fail early if any of the required params is missing
  if (!component) return;
  const listener = (event) => {
    if (
      event.target !== component.value &&
      event.composedPath().includes(component.value)
    ) {
      return;
    }
    if (
      event.target.id === "toggle-mobile" ||
      event.target.tagName === "BUTTON" ||
      event.target.tagName === "SPAN" ||
      event.target.tagName === "A"
    ) {
      return;
    }

    if (typeof callback === "function") {
      callback();
    }
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
}
