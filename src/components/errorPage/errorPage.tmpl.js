export const template = () => {
  return `
    <div class="whole">
      <div class="error_page">
        <h1 class="error_page_title">{{ title }}</h1>
        <h3 class="error_page_title">{{ subtitle }}</h3>
        <a href="/chats.html">
          {{ button }}
        </a>
      </div>
    </div>
  `
}
