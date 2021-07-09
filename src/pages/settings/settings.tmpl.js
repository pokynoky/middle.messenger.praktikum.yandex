export const template = () => {
  return `
    <div class="settings_page">
      <div class="settings">
        <div class="settings_avatar">
        </div>
        <div class="settings_name">
          {{ user.name }}
        </div>
      </div>
      {{ fields }}

      <div class="settings_buttons_group">
        {{ buttonsGroup }}
      </div>

      <div class="settings_buttons_group">
        {{ saveButton }}
      </div>

      <div class="settings_sidebar">
        <a href="/chats" class="back_arrow">
          <
        </a>
      </div>
    </div>
  `
}