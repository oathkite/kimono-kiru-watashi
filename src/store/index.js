export const state = () => ({
    showSplash: true
})

export const mutations = {
    toggleSplash (state) {
        state.showSplash = !state.showSplash
    }
}
