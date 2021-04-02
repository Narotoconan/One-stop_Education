import http from '../../requests/apis/curriculumApi'

export default {
    state: {},
    mutations: {},
    actions: {
        getRandomCurriculum(context,payload){
            return  http.randomCurriculum({
                rnd:payload
            })
        },
    },
    getters: {},
}
