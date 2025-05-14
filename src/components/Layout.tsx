import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`
        min-h-screen w-full 
        transition-all duration-500 
        bg-cover bg-center bg-fixed
        ${theme === 'light' 
          ? 'bg-[url("https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg")]' 
          : 'bg-[url("https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg")]'
        }
      `}
    >
      <div className={`
        min-h-screen w-full
        backdrop-blur-sm
        ${theme === 'light' 
          ? 'bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-blue-200/80' 
          : 'bg-gradient-to-br from-indigo-950/90 via-purple-900/90 to-pink-950/90'
        }
      `}>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
