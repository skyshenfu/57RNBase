import {observable,action}from 'mobx'
class Store{
    @observable
    status=false;

    @action
    _toggleStatus=()=>{
        this.status=!this.status
    }
}
export  const store=new Store();