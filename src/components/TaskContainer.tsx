import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import { useTheme } from '../contexts/ThemeContext';

const TaskContainer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      rounded-xl p-6 md:p-8 
      backdrop-blur-md shadow-xl
      transition-all duration-300
      ${theme === 'light' 
        ? 'bg-white/70 shadow-purple-200/50' 
        : 'bg-gray-900/60 shadow-purple-900/30'}
    `}>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default TaskContainer;
