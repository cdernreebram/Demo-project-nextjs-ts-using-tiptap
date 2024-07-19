'use client';
// components/Editor.tsx

import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Button, Select, MenuItem } from '@mui/material';

// Define the fonts
const fonts = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Verdana', label: 'Verdana' },
];

const Editor = () => {
  const [font, setFont] = useState<string>('Arial');
  const [editorContent, setEditorContent] = useState<string>('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle.configure({
        // Remove 'types' if it's causing issues
        // You can use the default configuration
      }),
    ],
    content: '<p>Hello World! 🌍</p>',
  });

  const handleSave = () => {
    if (editor) {
      setEditorContent(editor.getText()); // Use getText() to get plain text without HTML tags
      alert('Saved Content:\n' + editor.getText()); // Show plain text content
    }
  };



  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Select
          value={font}
          onChange={(event) => setFont(event.target.value as string)}
          style={{ marginRight: '10px' }}
        >
          {fonts.map((font) => (
            <MenuItem key={font.value} value={font.value}>
              {font.label}
            </MenuItem>
          ))}
        </Select>
        <Button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Bold
        </Button>
        <Button onClick={handleSave} variant="contained" color="secondary">
          Save
        </Button>
      </div>
      <div
        style={{
          fontFamily: font,
          backgroundColor: '#87CEFA', // Set background color to SkyBlue
          color: '#000000', // Set text color to black
          border: '1px solid #ddd',
          padding: '10px',
          minHeight: '200px',
        }}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
