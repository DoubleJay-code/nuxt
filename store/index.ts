import { ActionContext } from 'vuex'

export interface State {
  allPosts: Post[],
  postsOnPage: Post[],
  PostByID: Post | null,
  totalPages: number,
  limit: number,
  page: number,
}
export interface Post {
  id: string,
  createdAt: string,
  title: string,
  preview: string,
  image: string,
  description: string,
}
export const state = (): State => ({
  allPosts: [],
  postsOnPage: [],
  PostByID: {} as Post,
  totalPages: 0,
  limit: 9,
  page: 1,
})

export const mutations = {
  setPosts(state: State, posts: Post[]) {
    state.allPosts = posts;
  },
  setPostsOnPage(state: State) {
    const { page, limit } = state;
    const end: number = page * limit;
    const start: number = (page * limit) - limit;
    state.postsOnPage = state.allPosts.slice(start, end)
  },
  setTotalPages(state: State, posts: Post[]) {
    state.totalPages = Math.ceil(posts.length / state.limit)
  },
  changePage(state: State, page: number) {
    state.page = page
    localStorage.setItem('page', String(page))
    state.postsOnPage = state.allPosts
      .slice(((state.page * state.limit) - state.limit), (state.page * state.limit))
  },
  setPage(state: State) {
    if (localStorage.getItem('page')){
      state.page = Number(localStorage.getItem('page'))
    }
  },
  setPostById(state: State, post: Post) {
    state.PostByID = post
  }
}

export const actions = {
  async fetchPosts({ state, commit }: ActionContext<State, any>) {
    if (localStorage.getItem('posts')) {
      commit('setPosts', JSON.parse(localStorage.getItem('posts') ?? '[]'))
      commit('setPostsOnPage', state.allPosts);
      commit('setTotalPages', state.allPosts);
    } else {
      try {
        await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts')
          .then(data => data.json())
          .then((json: Post[]) => {
            commit('setPosts', json.reverse());
            commit('setPostsOnPage');
            commit('setTotalPages', json);
            localStorage.setItem('posts', JSON.stringify(json))
          })
      } catch (error) {
        console.log(error);
      }
    }

  },
  async fetchPostByID({ state, commit }: ActionContext<State, any>, id: string) {
    try {
      await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + id)
        .then(data => data.json())
        .then((json: Post) => {
          commit('setPostById', json)
        })
    } catch (error) {
      console.log(error);
    }
  }
}
