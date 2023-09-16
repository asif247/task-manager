// import React from 'react';

import { useSelector } from "react-redux";
import Modal from "../Ui/Modal";
import Tasks from '../../pages/Tasks';

const TaskDetailsModal = ({isOpen,setIsOpen,id}) => {
    const {tasks}=useSelector((state)=>state.tasks)
    console.log(tasks)
    const task=tasks.find((item)=>item.id==id)
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title} description={task?.description}></Modal>
        </div>
    );
};

export default TaskDetailsModal;