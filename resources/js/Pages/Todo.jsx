import React from 'react';
import AdminLayout from "@/Layouts/AdminLayout.jsx";

const Todo = () => {
    return (
        <AdminLayout>
            <div className={'max-w-4xl mx-auto'}>
                <h2 className={'font-semibold text-4xl my-8 text-center'}>Todo App</h2>
                <form action="">
                    <div className="flex gap-4 items-center mb-6">
                        <input type="text" placeholder={'Enter todo here'} className={'px-4 py-2 rounded-md grow'}/>
                        <button className={'py-2 px-4 rounded-md bg-indigo-500'}>Save</button>
                    </div>
                </form>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center py-3 px-6 bg-green-300 rounded-md">
                        <h3>Lorem dolor sit amet</h3>
                        <div>
                            Edit | Hapus
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 bg-green-300 rounded-md">
                        <h3>Lorem dolor sit amet</h3>
                        <div>
                            Edit | Hapus
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 px-6 bg-red-400 rounded-md">
                        <h3>Lorem dolor sit amet</h3>
                        <div>
                            Edit | Hapus
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Todo;
