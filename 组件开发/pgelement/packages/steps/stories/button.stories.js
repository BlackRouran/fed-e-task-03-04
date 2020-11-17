import LgButton from '../'


export  default {
    title: 'LgButton',
    component: LgButton
}

export const BaseButton = () => ({
    components: {LgButton},
    template: '<lg-button>click me</lg-button>'
})  