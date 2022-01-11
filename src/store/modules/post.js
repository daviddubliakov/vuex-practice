export default {
  state: {
    posts: []
  },
  getters: {
    validPosts(state) {
      return state.posts.filter(post => post.title && post.body);
    },
    allPosts(state) {
      return state.posts;
    },
    postsCount(_state, getters) {
      return getters.validPosts.length;
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    }
  },
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const posts = await res.json();

      ctx.commit('updatePosts', posts);
    }
  },
}
