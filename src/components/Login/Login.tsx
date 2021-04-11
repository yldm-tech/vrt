import React, { FormEvent } from "react";
import loginCss from '@/components/Login/login.module.css';

interface Props{
    username?:string;
    password?:string;
}
export class LoginComponent extends React.Component<Props>{
    formState: Props = {username:'',password:''}

    constructor(props:Props){
        super(props);
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className={loginCss.title}>login</h1>
                <input type="text" name="username" onChange={this.handleFormDataChange('username').bind(this)} />
                <input type="password" name="password" onChange={this.handleFormDataChange('password')} />
                <button type="submit">submit</button>
            </form>
        )
    }

    handleFormDataChange = (dataType:string)=>{
        return (event:any)=>{
            console.log(`${dataType} - ${event.target.value}`)
            this.setState({[dataType]: event.target.value})
        }
    }

    handleSubmit= (event: FormEvent)=>{
        event?.preventDefault();
        console.log(this.state);
    }

  
}