import React, { useState, useEffect } from 'react'; //criando um estado, utilizando quando quando queremos usar o conteúdo de uma variavel na interface.

import './style.css';

import { Card, CardProps } from '../../componentes/Card';

type ProfileResponse = {
    name: string;
    avatar_url: string;

}

type User = {
    name: string;
    avatar: string;
}
export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState<CardProps[]>([]);
    const [user, setUser] = useState<User>({} as User);

    function handleAddStudent(){
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute:"2-digit",
                second:"2-digit",
            })
        };

        setStudents(prevState => [...prevState, newStudent]); // ... significa para pegar todo o vetor, prevState: fica o anterior e adiciona um novo estudante

    }

    useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://api.github.com/users/AlannaaSilva")
            const data = await response.json() as ProfileResponse;//usamos o then por se tratar de uma promise

            setUser({
                name: data.name,
                avatar: data.avatar_url
            })
        } 
    })    

    

    return(
        <div className='container'>
        <header>
            <h1> Lista de Presença </h1>
            <div>
                <strong>{user.name}</strong>
                <img src={user.avatar} alt='foto de perfil' />
            </div>
        </header>
        
        <input
         type="text"
         placeholder="Digite um nome..."
         onChange={e =>  setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
            Adicionar
        </button>

        {
            students.map(student => (
                <Card 
                    key={student.time}
                    name={student.name} 
                    time={student.time}
                /> 
            ))
            
        }
        

        </div>
    )
    
}

