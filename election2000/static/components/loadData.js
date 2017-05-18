export const loadData = (path, onReceiveData) => {
  let data = localStorage.getItem(path)
  if (data) {
    onReceiveData(JSON.parse(data))
  }

  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let data = xhr.responseText
      localStorage.setItem(path, data)
      onReceiveData(JSON.parse(data))
    }
  }

  xhr.open('GET', path, true)
  xhr.send()
}
