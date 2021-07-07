export const template = () => {
  return `
    <div class="whole">
      <div class="login_page">
        <form class="login_form">
          <h3 class="login_form_header">Вход</h3>
          <label
            for="login"
            class="label_input"
          >
            Логин
          </label>
          <input
            id="login"
            type="text"
            class="login_form_input"
          >
          <label
            id="password"
            class="label_input"
          >
            Пароль
          </label>
          <input
            id="password"
            type="password"
            class="login_form_input"
          >
          <div class="login_form_buttons">
            <button class="button login_form_submit">
              Авторизоваться
            </button>
            <a class="link">
              Нет аккаунта?
            </a>
          </div>
        </form>
      </div>
    </div>
  `
}
