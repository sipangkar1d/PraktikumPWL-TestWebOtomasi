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
    namahandler = e => {
        this.setState({
            Nama: e.target.value
        })
    }
    usernamehandler = e => {
        this.setState({
            username: e.target.value
        })
    }
    passwordhandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    repasshandler = e => {
        this.setState({
            repassword: e.target.value
        })
    }

    handleSubmit = e => {
        if (!this.state.Nama.trim()) {
            errors.nama = "Nama tidak boleh kosong";
        }
        if (!this.state.username.trim()) {
            errors.username = "Username tidak boleh kosong";
        } else if (this.state.username) {
            for (const user of usernameDummy) {
                if (user === this.state.username) {
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
            errors.repassword = "Password tidak boleh kosong";
        } else if (this.state.password !== this.state.repassword) {
            errors.repassword = "Password tidak cocok";
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
        e.preventDefault()

    }

    render() {
        return (
            <div className="container" style={{ paddingTop: 200, paddingBottom: 200, backgroundColor: '#F8DA56' }}>
                <div class="d-flex justify-content-center">
                    <div>
                        <div className="card" style={{ backgroundColor: '#EEEEEE' }}>
                            <img src={Icon} alt="icon-profile" style={{ width: 35, height: 35, position: 'absolute', alignSelf: 'center', marginTop: -18 }} />
                            <div style={{ width: 50, height: 50, backgroundColor: '#23A855', borderWidth: 0, borderRadius: 60, alignSelf: 'center', marginTop: -25, marginBottom: -10 }}></div>
                            <div className="card-body">
                                <h2>Registrasi</h2>
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 400 }} type="text" value={this.state.Nama} onChange={this.namahandler} placeholder="Nama" id="Nama" /><br />

                                    <p style={{ position: 'absolute', marginTop: 22, marginLeft: 389, color: 'red', fontSize: 18 }}>*</p>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 400 }} type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username" id="username" /><br />
                                    {errors.username && <p style={{ position: 'absolute', color: 'red', fontSize: 12, marginBottom: -18 }}>{errors.username}</p>}

                                    <p style={{ position: 'absolute', marginTop: 22, marginLeft: 389, color: 'red', fontSize: 18 }}>*</p>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 400 }} type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" id="password" /><br />
                                    {errors.password && <p style={{ position: 'absolute', color: 'red', fontSize: 12, marginBottom: -18 }}>{errors.password}</p>}

                                    <p style={{ position: 'absolute', marginTop: 22, marginLeft: 389, color: 'red', fontSize: 18 }}>*</p>
                                    <input style={{ marginTop: 25, backgroundColor: '#D3D3D3', borderWidth: 0, padding: 5, width: 400 }} type="password" value={this.state.repassword} onChange={this.repasshandler} placeholder="Repassword" id="repassword" /><br />
                                    {errors.repassword && <p style={{ position: 'absolute', color: 'red', fontSize: 12, marginBottom: -18 }}>{errors.repassword}</p>}

                                    <button className="btn btn-primary" style={{ marginTop: 25, width: 400, backgroundColor: '#23A855', borderWidth: 0 }} type="submit" value="REGISTER" id="btnsubmit">Register</button>
                                </form>
                                {errors.berhasil && <p>{errors.berhasil}</p>}
                                <p style={{ marginTop: 25 }}>Back to <a href="#">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Form
