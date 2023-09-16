import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import userSlice from '../../redux/features/user/userSlice';
import { useEffect, useState } from "react";
import { updateStatus, userTask } from "../../redux/features/tasks/TasksSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [taskId,setTaskId]=useState(0)
  const { tasks,userSpecificTask } = useSelector((state) => state.tasks); 
  const { name:userName } = useSelector((state) => state.userSlice);
  console.log(name)
  const dispatch=useDispatch()

  const handleModal=(id)=>{
    setTaskId(id)
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    dispatch(userTask(userName))
  },[userName,dispatch,tasks])

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId}></TaskDetailsModal>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          userSpecificTask.map((item)=>(
            <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button onClick={()=>handleModal(item.id)} className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={()=>dispatch(updateStatus({id:item.id,status:'done'}))} className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default MyTasks;
