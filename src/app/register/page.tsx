"use client";

import Input from "@/src/components/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUserContext } from "@/src/contexts/UserContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

// Interface de Registro
interface RegisterInterface {
    email: string;
    password: string;
}

const RegisterForm: React.FC = () => {
    const router = useRouter();
    const { addUser } = useUserContext();

    // Instancia um state para dados do form
    const [formData, setFormData] = useState<RegisterInterface>({
        email: '',
        password: ''
    });

    // Lida com o submit do form
    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUser(formData); // utiliza o UserContext para adicionar um usuário ao array
        console.log('Usuário registrado:', formData);
        router.push("/"); // redireciona ao index
    };

    // Lida com a mudança de valor dos inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-300 to-green-400 flex items-center justify-center">
            <form onSubmit={handleForm} className="bg-white p-6 rounded shadow-md w-full max-w-sm flex items-center flex-col">
                <h1 className="text-2xl mb-4 border-b border-gray-400 pb-1 px-4">Crie a sua conta!</h1>
                
                <Input
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 mb-2 w-full"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                    required={true}
                />
                <Input
                    type="password"
                    name="password"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 mb-2 w-full"
                    placeholder="Digite sua senha"
                    required={true}
                    value={formData.password}
                    onChange={handleChange}
                />
                
                <button type="submit" className="mt-2 bg-yellow-400 text-black px-5 py-2 rounded-md w-full">Criar</button>

                <div className="relative flex items-center my-4 w-full px-10">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-black">ou</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="flex space-x-4 mb-4 w-full justify-center">
                    <button className="p-2 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center">
                        <FontAwesomeIcon icon={faGoogle} className="text-xl" />
                    </button>
                    <button className="p-2 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center">
                        <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                    </button>
                    <button className="p-2 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center">
                        <FontAwesomeIcon icon={faApple} className="text-xl" />
                    </button>
                </div>
                
                <p className="mt-4 text-center">Já possui uma conta? <Link href="/" className="text-lime-700">Entrar</Link></p>
            </form>
        </div>
    );
};

export default RegisterForm;
