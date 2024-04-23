import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-blue-500 w-96 h-96 flex flex-col items-center justify-center rounded-lg shadow-lg">
        <Image 
          src="/frontalview.jpg" 
          alt="Profile Picture"
          width={150} 
          height={150} 
        />
        <button className="mt-4 px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400">
          Portfolio
        </button>
      </div>
    </main>
  );
}
