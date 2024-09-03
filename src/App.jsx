import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData();

    formData.set('email', email)
    formData.set('password', password)

    const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', formData)


    if (response.data.success) {
      toast.success(response.data.message)
      setIsLoading(false)

      const authTk = response.data.data[0].token

      localStorage.setItem('token', authTk)

      setTimeout(function () {
        navigate('/dashboard')
      }, 3000);
      console.log(response.data)

    } else {
      toast.error("email ou mot de passe incorrect")
      setIsLoading(false)

    }
  };

  return (

    <div className='body'>
      <ToastContainer />

      <div><h1>Connexion</h1></div>
      <form onSubmit={handleSubmit}>
        <p>Veuillez renseignez vos paramètres de connexion <br />dans les champs enfin de pouvoir  accéder au <br /> plateforme</p>
        <Input
          label={'Email'}
          placeHolder={'Saisir votre adresse e-mail ici ... '}
          reference={'email'}
          type={'email'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        /> <br />
        {/* <div>{email}</div> */}
        <Input
          label={'Mot de passe'}
          placeHolder={'Saisir votre mot de passe ici ... '}
          reference={'password'}
          type={'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        /> <br />
        {/* <div>{password}</div> */}
        <div>
          <Button disabled={isLoading} type={'submit'} text={isLoading ? 'Chargement ...' : 'Soumettre'} /> <br />
          <Button type={'reset'} text={'Annuler'} />
        </div><br />
        <div>
          <Link className='link' to={'/registration'}>Inscription</Link>
        </div>
      </form>
    </div>










    // <div className='inoush'>
    //   <h1> Niveau {level}</h1>
    //   <Button text= "Incrémenter" onClick = {() => {
    //     setlevel((level) => {
    //       return level >= 10 ? level : level +1
    //     })
    //   }}/> <br /><br />
    //   <Button text= "Décrémenter" onClick = {() => {
    //     setlevel((level) => {
    //       return level <= 0 ? level : level -1
    //     })
    //   }}/>

    // </div>
  )
}
