import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: "my_user",
  state: () => ({
    user: {
        username: "",
        password: ""
    },
    count: 0,
    edit: "",
    text: "",
    title:"",
    error: "",
    user_property:{
        color: "",
        font_size: ""
    }
  }),
  actions: {
    confirm(username, password){
        this.user.username = username
        this.user.password = password
    },
    check(username, password){
        /*if(username = username from database and password = password from database){
            this.user.username = username
            this.user.password = password
        }
        else{
            this.error = "Username or Password is incorrect"
        }
        */
    },
    increaseCount(){
        this.count++
    },
    changeColor(color){
        this.user_property.color = color;
    },
    changeFont(font_size){
        this.user_property.font_size = font_size
    },
    addEditor(edit){
        if (this.user.username == ""){
        this.edit = "Cannot make changes without logging in first"
        }
        else{
        this.edit = edit
        this.text = this.user.username + " made a change on " + new Date();
        }
    },
    changeTitle(title){
        this.title = title;
    },
    logout(){
        this.user.username = "";
        this.user.password = "";
        this.title = "";
        this.edit = "";
        this.user_property.color = "";
        this.user_property.font = "";
    }
  }
})
