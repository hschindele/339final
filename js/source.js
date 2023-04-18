document.querySelectorAll('img').forEach(item => {
  item.addEventListener('mouseover', event => {
    item.style.filter = 'drop-shadow(0 0 0.75rem rgb(255, 217, 0))';
  })
})

document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseout', event => {
      item.style.filter = '';
    })
  })