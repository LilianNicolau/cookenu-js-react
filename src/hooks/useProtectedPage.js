import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { irParaLogin } from '../router/coordinator';

export default function useProtectedPage() {
    
    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem("token");
        if (token === null) {
          irParaLogin(navigate);
        }
    },[navigate])

    
}
