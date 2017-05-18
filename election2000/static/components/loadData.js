export const loadData = (path, onReceiveData) => {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      onReceiveData(JSON.parse(xhr.responseText))
    }
  }

  xhr.open('GET', path, true)
  xhr.send()
}
