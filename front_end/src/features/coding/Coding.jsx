import { Form, useActionData } from 'react-router-dom';

function Coding() {
  const output = useActionData();
  return (
    <Form
      className="flex w-full flex-col items-center justify-center gap-5"
      method="POST"
    >
      <textarea
        className="h-80 w-1/2 text-wrap rounded-md border border-gray-300 p-2 text-black focus:outline-blue-400"
        style={{ fontFamily: 'Courier New, monospace' }}
        name="code"
      ></textarea>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white duration-200 hover:bg-blue-700"
        type="submit"
      >
        Run Code
      </button>
      <div className="border border-gray-300 p-4">
        Output: {output || '$OUTPUT_PLACEHOLDER$'}
      </div>
    </Form>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const code = formData.get('code');
  console.log(code);

  // Example API request
  const response = await fetch('https://api.example.com/run-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  const result = await response.json();

  return result.output || ''; // Assuming the API returns the output in this format
}

export default Coding;
