import React from 'react';
import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {router, useForm, usePage} from "@inertiajs/react";
import {BsCheckCircle, BsPencilSquare, BsTrash} from "react-icons/bs";

const Todo = () => {
    const {flash, errors} = usePage().props;

    const {data, setData, reset} = useForm({
        name: ''
    })

    const storeTodo = (e) => {
        e.preventDefault()
        router.post('/todo', data, {
            onSuccess: reset()
        });
    }

    return (
        <AdminLayout>
            <div className={'max-w-4xl mx-auto'}>
                <h2 className={'font-semibold text-4xl my-8 text-center'}>Todo App</h2>
                {flash.message && (
                    <div className={'py-2 px-4 rounded-md bg-green-300 text-center'}>
                        {flash.message}
                    </div>
                )}
                <form onSubmit={storeTodo}>
                    <div className="mb-6">
                        <div className="flex gap-4 items-center">
                            <input type="text" placeholder={'Enter todo here'} className={'px-4 py-2 rounded-md grow'}
                                   onChange={(e) => setData('name', e.target.value)}
                                   value={data.name}
                            />
                            <button className={'py-2 px-4 rounded-md bg-indigo-500'}>Save</button>
                        </div>
                        {errors.name && (
                            <p className={'text-red-700 text-sm'}>
                                {errors.name}
                            </p>
                        )}
                    </div>
                </form>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center py-3 px-6 bg-red-100 rounded-md">
                        <h3>Lorem dolor sit amet</h3>
                        <div className={'flex items-center justify-center gap-2'}>
                            <BsPencilSquare size={20}/> | <BsTrash size={20}/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 bg-green-100 rounded-md">
                        <h3>Lorem dolor sit amet</h3>
                        <div className={'flex items-center justify-center gap-2'}>
                            <BsCheckCircle size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Todo;
