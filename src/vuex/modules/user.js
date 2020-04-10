const state = {
  main: {
    name: sessionStorage.getItem('info') ? JSON.parse(sessionStorage.getItem('info')).name : 'Alexander Pierce',
    position: 'Web Developer',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
}

const mutations = {
}

export default {
  state,
  mutations
}
