document.addEventListener('click', (e) => {
  if(e.target.dataset.type === 'remove'){
    const id = e.target.dataset.id
    remove(id).then(() => {
      e.target.parentNode.closest('li').remove()
    })
  }else if(e.target.dataset.type === 'edit'){

    const id = e.target.dataset.id
    const title = e.target.dataset.title

    const newNoteInputValue = prompt('Введите новое значение заметки')

    if(newNoteInputValue !== null){
      edit({id, title: newNoteInputValue}).then(() => {
        e.target.closest('li').querySelector('span').innerText = newNoteInputValue
      })
    }

    edit(e.target.dataset.id)
    console.log('edit button click id:', e.target.dataset.id)
  }
})


async function edit(newNote){
  await fetch(`/${newNote.id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newNote)
  })
}

async function remove(id){
  await fetch(`/${id}`, {method: 'DELETE'})
}