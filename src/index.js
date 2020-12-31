import './style.scss'

import content from './template/element.min'

function createElement() {
  const div = document.createElement('div')
  div.className = 'j-china-lantern'
  div.innerHTML = content
  document.body.appendChild(div)
}

createElement()
