export const state = () => ({
    isSplashFinish: false
})

export const getters = {
    isSplashFinish: state => state.isSplashFinish
}

export const mutations = {
    finishSplash (state) {
        state.isSplashFinish = true
    }
}
