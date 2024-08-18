import { Form, useActionData } from 'react-router-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import rehypePrism from 'rehype-prism-plus';
import rehypeRewrite from 'rehype-rewrite';
import { useState } from 'react';

function Coding({ language }) {
  const output = useActionData();
  const [code, setCode] = useState('');

  return (
    <Form
      className="flex w-full flex-col items-center justify-center gap-8 rounded-lg p-6"
      method="POST"
    >
      <CodeEditor
        language={language}
        placeholder={`Please enter ${language} code.`}
        onChange={(evn) => setCode(evn.target.value)}
        className="h-80 w-full max-w-2xl rounded-md border border-gray-600 p-4 text-[16px] text-white"
        style={{
          color: '#f8f7ED',
          backgroundColor: '#1e1e1e',
          fontFamily:
            '"Fira code", "Fira Mono", monospace, SF Mono, Consolas, Liberation Mono, Menlo',
          fontSize: '16px',
        }}
        rehypePlugins={[
          [rehypePrism, { ignoreMissing: true }],
          [
            rehypeRewrite,
            {
              rewrite: (node, index, parent) => {
                if (node.properties?.className?.includes('code-line')) {
                  if (index === 0 && node.properties?.className) {
                    node.properties.className.push('demo01');
                  }
                }
                if (
                  node.type === 'text' &&
                  node.value === 'return' &&
                  parent.children.length === 1
                ) {
                  parent.properties.className.push('demo123');
                }
              },
            },
          ],
        ]}
      />
      <input type="hidden" name="code" value={code} />
      <button
        className="rounded bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg duration-200 hover:bg-blue-800"
        type="submit"
      >
        Run Code
      </button>
      <input type="hidden" name="language" value={language} />
      <div className="w-2/3 max-w-2xl rounded border border-gray-600 bg-gray-800 p-6 shadow-lg">
        <h3 className="mb-2 text-lg font-bold text-gray-200">Output:</h3>
        <div className="whitespace-pre-wrap rounded bg-gray-900 p-4 text-gray-300">
          {output || 'Click run to execute your code'}
        </div>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const code = formData.get('code');
  const codeList = code.split('\n');
  const language = formData.get('language');
  const host = '166.48.20.39';
  const url = `http://${host}:3000/${language}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: codeList }),
    mode: 'cors',
  });

  const result = await response.json();

  if (result.error) {
    return { error: result.error };
  }

  return result.data || '';
}

export default Coding;
