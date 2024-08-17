function Coding() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <textarea className="h-80 w-1/2 text-wrap rounded-md border border-gray-300 p-2 text-black focus:outline-blue-400"></textarea>
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white duration-200 hover:bg-blue-700">
        Run Code
      </button>
      <div className="border border-gray-300 p-4">
        Output: $OUTPUT_PLACEHOLDER$
      </div>
    </div>
  );
}

export default Coding;
