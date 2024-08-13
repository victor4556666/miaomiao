import Vue from 'vue'
import MessageBox from './MessageBox'

export const messagebox = (function () {
    let defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    }
    let myComponent = Vue.extend(MessageBox)
    return function (opt) {
        for (let i in opt) {
            defaults[i] = opt[i]
        }

        let vm = new myComponent({
            el: document.createElement('div'),
            data() {
                return {
                    title: defaults.title,
                    content: defaults.content,
                    cancel: defaults.cancel,
                    ok: defaults.ok
                }
            },
            methods: {
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.call(this)
                    document.body.removeChild(vm.$el)
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el)
    }
})()