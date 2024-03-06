document.addEventListener('click', (e) => {
  if(e.target.dataset.type === 'remove'){
    const id = e.target.dataset.id
    remove(id).then(() => {
      e.target.parentNode.closest('li').remove()
    })
  }else if(e.target.dataset.type === 'edit'){
    edit(e.target.dataset.id)
    console.log('edit button click id:', e.target.dataset.id)
  }
})


async function edit(id){
  await fetch(`/${id}`, {method: 'POST'})
}

async function remove(id){
  await fetch(`/${id}`, {method: 'DELETE'})
}