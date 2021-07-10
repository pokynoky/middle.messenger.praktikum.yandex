export const template = () => {
  return `
    <button
      type="button"
      class="button button_{{ type }} button_{{ danger }}"
    >
      {{ children }}
    </button>
  `
}
