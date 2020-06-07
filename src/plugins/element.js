import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button).use(Form).use(FormItem).use(Input);
Vue.prototype.$message = Message
Vue.component(Message) // 如果直接写Vue.use(Message)，当每次刷新页面会自动弹出message
