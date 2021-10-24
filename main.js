const linksSocialMedia = {
  github: 'typejulio',
  youtube: 'UCuvBhQfvwMjxV558u0j6akQ',
  facebook: '/Júlio-Almeida/100005101532620/',
  instagram: 'juliorx_',
  twitter: 'jumaster56'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    alert(li.getAttribute('class'))

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

//changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      PhotoLink.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
