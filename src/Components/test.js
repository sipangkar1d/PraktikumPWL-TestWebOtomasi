import React, { Component } from 'react'

let usernameDummy = ["sipangkar"];
let errors = {};
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Nama: "",
            username: "",
            password: "",
            repassword: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    namahandler = (event) => {
        this.setState({
            Nama: event.target.value
        })
    }
    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    repasshandler = (event) => {
        this.setState({
            repassword: event.target.value
        })
    }

    handleSubmit = (event) => {
        if (!this.state.Nama.trim()) {
            errors.nama = "Nama tidak boleh kosong";
        }
        if (!this.state.username.trim()) {
            errors.username = "Username tidak boleh kosong";
          } else if (this.state.username) {
            for (const uDummy of usernameDummy) {
              if (uDummy === this.state.username) {
                errors.username = "Username sudah dipakai";
              }
            }
          }
        
          if (!this.state.password) {
            errors.password = "Password tidak boleh kosong";
          } else if (this.state.password.length < 8) {
            errors.password = "Password harus terdiri dari 8 karakter atau lebih";
          }
        
          if (!this.state.repassword) {
            errors.repassword = "Confirmation password tidak boleh kosong";
          } else if (this.state.password !== this.state.repassword) {
            errors.repassword = "Confirmation password tidak cocok";
          }
        if(Object.keys(errors).length === 0){
            errors.berhasil = "Berhasil Registrasi"
            alert(`${this.state.username}  Berhasil Registrasi`)
        console.log(this.state);
       
    }else{
        alert(`Some Errors`)
        console.log(this.state);
    }
     this.setState({
            Nama: "",
            username: "",
            password: '',
            repassword: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit}>
                    <h1>Registrasi</h1>
                     <input type="text" value={this.state.Nama} onChange={this.namahandler} placeholder="Nama" id="Nama"/><br />
                     {errors.nama && <p>{errors.nama}</p>}
                     <input type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username" id="username"/><br />
                     {errors.username && <p>{errors.username}</p>}
                     <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" id="password"/><br />
                     {errors.password && <p>{errors.password}</p>}
                    <input type="password" value={this.state.repassword} onChange={this.repasshandler} placeholder="Re-Password..." id="repassword"/><br />
                    {errors.repassword && <p>{errors.repassword}</p>}
                    
                    <input type="submit" value="REGISTER" id="btnsubmit"/>
                </form>
                {errors.berhasil && <p>{errors.berhasil}</p>}

            </div>
            
        )
    }
}

export default Form
