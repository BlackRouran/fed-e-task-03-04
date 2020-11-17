import LgInput from '../'


export  default {
    title: 'LgInput',
    component: LgInput
}

export const Text = () => ({
    components: { LgInput },
    template: '<lg-input type="text" v-model="msg"></lg-input>',
    data: ()=> {
        return {
            msg: 'hello storiesbook'
        }
    }
}) 

export const  Password = () => ({
    components: { LgInput },
    template: '<lg-input type="password" v-model="psd"></lg-input>',
    data: () => {
        return {
            psd: 123456
        }
    }
}) 