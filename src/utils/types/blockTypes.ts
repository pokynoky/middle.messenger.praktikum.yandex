type BlockProps = {
  title?: string
  formFields?: Fields[]
  submitText?: string
  link?: string
  linkText?: string
  value?: string
}

type Fields = {
  name: string
  value: string
  typeInput?: string
}

export default BlockProps
