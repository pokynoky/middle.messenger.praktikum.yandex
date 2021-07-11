export const template = `
  <div class="wrapper">
    <div class="form_page">
      <form>
        <h3 class="login_form_title">{{ title }}</h3>
        {{ formFields }}

        <div class="login_form_buttons">
          <div class="login_form_submit">
            {{ submitButton }}
          </div>
          <a href="{{ link }}">
            {{ linkButton }}
          </a>
        </div>
      </form>
    </div>
  </div>
`
