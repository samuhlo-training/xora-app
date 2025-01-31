import { useEffect } from 'react'

const ComponentsMetaData = () => {
  const title = 'Xora que xora'
  const onBlur = () => {
    document.title = 'Come back! Im sad :('
  }
  const onFocus = () => {
    document.title = title
  }
  useEffect(() => {
    document.title = title
    window.addEventListener('blur', onBlur)
    window.addEventListener('focus', onFocus)
    return () => {
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('focus', onFocus)
    }
  }, [])
}

export default ComponentsMetaData
