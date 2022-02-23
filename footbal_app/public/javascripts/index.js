function deletePlayer(id) {
  fetch('http://localhost:3000/players/' + id, {
    method: 'DELETE',
  })
  .then(res => res.text())
  .then(res => {
    location.reload();
  })
}


function deleteClub(id) {
  fetch('http://localhost:3000/clubs/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
      location.reload();
    })
}

function deleteAgent(id) {
  fetch('http://localhost:3000/agents/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
      location.reload();
    })
}

function sendEmail(id) {
  fetch('http://localhost:3000/players/mail/' + id, {
      method: 'POST',
    })
    .then(res => res.text())
    .then(res => {
      location.reload();
    })
}
  
  /**
   * 1. Imame html button
   * 2. onClick ja povikuvame funkcijata deleteCompany vo js i prakjame company id
   * 3. deleteCompany isprakja DELETE request na /companies/:id
   * 4. Na backend-ot se brise kompanijata i se vrakja response (prazen json, sto sakate moze da bide)
   * 5. vo deleteCompany se spravuvame so promise-ot i go cekame response-ot
   * 6. Stom response-ot stigne, ja refresh-irame stranata za od novo da se vcitaat zapisite
   */
  