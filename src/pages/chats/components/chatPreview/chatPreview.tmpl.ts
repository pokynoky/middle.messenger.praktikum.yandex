export const template = `
  <li class="chat_list_li">
    <div class="avatar"></div>
    <div class="chat">
      <span class="chat_title">
        <span class="chat_title_name">
          {{ chat.title }}
        </span>
        <span class="chat_title_date">
          {{ chat.date }}
        </span>
      </span>
      <span class="chat_subtitle">
        <span class="chat_subtitle_last_message">
          {{ chat.lastMessage }}
        </span>
        <span class="chat_subtitle_count_messages">
          {{ chat.countMessages }}
        </span>
      </span>
    </div>
  </li>
`
