export const template = `
  <div class="whole">
    <div class="chat_list">
      <div class="chat_list_header">
        <div class="link_container">
          <a href="/settings" class="link">Профиль ></a>
        </div>
        <div class="input_search">
          <input
            type="text"
            class="input_search_input"
            placeholder="Поиск"
          >
        </div>
      </div>
      <div class="chat_list_content">
        <ul class="chat_list_chats">
          {{ chatList }}
        </ul>
      </div>
    </div>
    <div class="chat">
      {{ chat }}
    </div>
  </div>
`
