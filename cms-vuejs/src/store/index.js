import { createStore } from 'vuex'

export default createStore({
    state: {
        posts: [{
            "title": "Coucou tout le monde",
            "meta_title": "meta coucou tout le monde",
            "meta_description": "meta description coucou tout le monde",
            "image": "@/assets/logo.png",
            "content": "contenu coucou tout le monde"
        }]
    },
    mutations: {
        CREATE_POST(state, post) {
            state.posts.push(post);
        }
    },
    actions: {
        createPost(context, post) {
            context.commit('CREATE_POST', post);
        }
    }
})