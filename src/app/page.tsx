// pages/index.tsx
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the Editor component
const Editor = dynamic(() => import('../components/Editor'), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>Basic Tiptap Editor</h1>
      <Editor />
    </div>
  );
};

export default HomePage;
