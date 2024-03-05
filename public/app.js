document.addEventListener('click', (e) => {
  if(e.target.dataset.type === 'remove'){
    const id = e.target.dataset.id


    console.log(id)
  }
})