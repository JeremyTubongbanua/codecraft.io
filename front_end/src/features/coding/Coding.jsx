import { Form, useActionData } from 'react-router-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import rehypePrism from 'rehype-prism-plus';
import rehypeRewrite from 'rehype-rewrite';
import { useState } from 'react';

function Coding({ language }) {
  const output = useActionData();
  console.log(output);
  const [code, setCode] = useState('');
  return (
    <Form
      className="flex w-full flex-col items-center justify-center gap-5"
      method="POST"
    >
      <CodeEditor
        language={language}
        placeholder={`Please enter ${language} code.`}
        onChange={(evn) => setCode(evn.target.value)}
        className="h-80 w-1/2 text-wrap rounded-md border border-gray-300 p-2 text-[14px] text-black focus:outline-blue-400"
        style={{
          color: '#f8f7ED',
          backgroundColor: '#2d2d2d',
          fontFamily:
            'Fira code", "Fira Mono", monospace,SF Mono,Consolas,Liberation Mono,Menlo',
          fontSize: '18px',
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
                    // console.log("~~~", index, node.properties?.className);
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
      {/* <textarea
        className="h-80 w-1/2 text-wrap rounded-md border border-gray-300 p-2 text-black focus:outline-blue-400"
        style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          padding: '10px',
        }}
        name="code"
      /> */}
      <input type="hidden" name="code" value={code} />
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white duration-200 hover:bg-blue-700"
        type="submit"
      >
        Run Code
      </button>
      <input type="hidden" name="language" value={language} />
      <div className="border border-gray-300 p-4">
        <h3>Output:</h3>

        <div className="whitespace-pre-wrap p-4">
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
  const host = '166.48.20.39'; // 166.48.20.39
  const url = `http://${host}:3000/${language}`;
  console.log(`Language: ${language}`);
  console.log(`Code: ${code}`);
  console.log(`Code List: ${codeList}`);
  console.log(`URL: ${url}`);

  // Example API request
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: codeList }),
    mode: 'cors',
  });

  const result = await response.json();

  if(result.error) {
    return { error: result.error };
  }

  console.log(result);

  return result.data || ''; // Assuming the API returns the output in this format
}

export default Coding;
