import React, { useState } from 'react'
import Button from '../../Components/Button/Button2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Dashbaord() {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem('token')

    const handleSubmit = async (e) => {

        setIsLoading(true)

        const response = await axios.get(
            'http://127.0.0.1:8000/api/v1.0.0/logout',
            {headers: {'Authorization': 'Bearer ' + token}}
        )

        if (response.data.success) {
            navigate('/')
            setIsLoading(false)
        }else {
            toast.error(response.data.success)
            setIsLoading(false)
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <Button
                disabled={isLoading}
                type={"submit"}
                text={isLoading ? 'Chargement ...' : 'Se déconnecter'}
                onClick={handleSubmit}
            />
        </div>
    )
}
