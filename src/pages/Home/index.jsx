import React, {useState} from 'react'; //criando um estado, utilizando quando quando queremos usar o conteúdo de uma variavel na interface.

import './style.css';

import { Card } from '../../componentes/Card';

export function Home() {
    const [studentName, setStudentName] = useState();
    const [students, setStudents] = useState([]);

    function handleAddStudent(){
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute:"2-digit",
                second:"2-digit",
            })
        };

        setStudents(prevState => [...prevState, newStudent]); // ... siginifica para pegar todo o vetor, prevState: fica o anterior e adiciona um novo estudante

    }

    return(
        <div className='container'>
        <h1> Lista de Presença </h1>

        <input
         type="text"
        placeholder="Digite um nome..."
        onChange={e =>  setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
            Adicionar
        </button>

        {
            students.map(student => <Card name={student.name} time={student.time} /> )
            
        }
        

        </div>
    )
    
}

