import React, { Component } from 'react'
import Icon from './icon.png'

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
        this.handleSubmit = this.handleSubmit.bind(this)
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
        if (Object.keys(errors).length === 0) {
            errors.berhasil = "Berhasil Registrasi"
            alert(`${this.state.username}  Berhasil Registrasi`)
            console.log(this.state);

        } else {
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
            <div className="container" style={{ width: '100%', height: '100%', padding: 300, backgroundColor: '#F8DA56' }}>
                <div class="d-flex justify-content-center">
                    <div>
                        <div className="card" style={{ backgroundColor: '#EEEEEE' }}>
                            <img src={Icon} alt="icon-profile" style={{ width: 35, height: 35, position: 'absolute', alignSelf: 'center', marginTop: -18 }} />
                            <div style={{ width: 50, height: 50, backgroundColor: '#23A855', borderWidth: 0, borderRadius: 60, alignSelf: 'center', marginTop: -25, marginBottom: -10 }}></div>
                            <div className="card-body">
                                <h2>Registrasi</h2>
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 300 }} type="text" value={this.state.Nama} onChange={this.namahandler} placeholder="Nama" id="Nama" /><br />
                                    
                                    <p style={{ position: 'absolute', marginTop: 22, marginLeft: 289, color: 'red', fontSize: 18 }}>*</p>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 300 }} type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username" id="username" /><br />
                                    {errors.username && <p style={{ color: 'red', fontSize: 12, marginBottom: -18 }}>{errors.username}</p>}
                                    
                                    <p style={{ position: 'absolute', marginTop: 22, marginLeft: 289, color: 'red', fontSize: 18 }}>*</p>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 300 }} type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" id="password" /><br />
                                    {errors.password && <p style={{ color: 'red', fontSize: 12, marginBottom: -18 }}>{errors.password}</p>}
                                    
                                    <p style={{ position: 'absolute', marginTop: 22, marginLeft: 289, color: 'red', fontSize: 18 }}>*</p>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 300 }} type="password" value={this.state.repassword} onChange={this.repasshandler} placeholder="Repassword" id="repassword" /><br />
                                    {errors.repassword && <p style={{ color: 'red', fontSize: 12, marginBottom: -18 }}>{errors.repassword}</p>}
                                    
                                    <button className="btn btn-primary" style={{ marginTop: 25, width: 300, backgroundColor: '#23A855', borderWidth: 0 }} type="submit" value="REGISTER" id="btnsubmit">Register</button>
                                </form>
                                {errors.berhasil && <p>{errors.berhasil}</p>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Form
