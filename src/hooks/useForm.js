import {useState} from 'react'
import { fileUpload } from '../helpers/fileUpload';

export  const useForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };

    const handleFileChange = (e) => {

        const file = e.target.files[0];

        fileUpload(file).then(response => {
            document.getElementById('image').value = response;

            setForm({
                ...form,
                imageUrl: response
            });
        }).catch(error => {
            throw error;
        });
    }

    const handleClickFile = (e) => {
        document.getElementById('fileSelector').click();
    }

    const reset = () =>{
        setForm(initialState);
    }

    return[form, handleChange, handleFileChange, handleClickFile, reset];

}
