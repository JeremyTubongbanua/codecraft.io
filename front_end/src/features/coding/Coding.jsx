import { Form, useActionData } from 'react-router-dom';

function Coding({ language }) {
  const output = useActionData();
  console.log(output);
  return (
    <Form
      className="flex w-full flex-col items-center justify-center gap-5"
      method="POST"
    >
      <textarea
        className="h-80 w-1/2 text-wrap rounded-md border border-gray-300 p-2 text-black focus:outline-blue-400"
        style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          padding: '10px',
        }}
        name="code"
      />
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
  const language = formData.get('language');
  console.log(language);
  const codeList = code.split('\n');
  console.log(codeList);
  const host = 'jeremymark.ca'; // 166.48.20.39
  const url = `http://${host}:3000/prompt`
  console.log(url);

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

  console.log(result);

  return result.data || ''; // Assuming the API returns the output in this format
}

export default Coding;
