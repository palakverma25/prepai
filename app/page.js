import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
    {/* Hero Section */}
    <header className="w-full text-center py-20">
      <h1 className="text-5xl font-bold">Ace Your Interviews with PrepAI</h1>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
        AI-powered mock interviews tailored to your skills and experience. Get real-time feedback and improve your confidence!
      </p>
      <Link href="/dashboard">
          <Button className="mt-8 px-8 py-4 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition-all">
            Get started
          </Button>
        </Link>
    </header>

    {/* Features Section */}
    <section className="w-full max-w-5xl px-6 py-12">
      <h2 className="text-3xl font-bold text-center">Why Choose PrepAI?</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">AI-Powered Interviews</h3>
          <p className="text-gray-400 mt-2">Simulate real-world interviews with cutting-edge AI.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Instant Feedback</h3>
          <p className="text-gray-400 mt-2">Receive detailed analysis and improvement suggestions.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Multiple Domains</h3>
          <p className="text-gray-400 mt-2">Practice for tech, business, and behavioral interviews.</p>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full text-center py-16 bg-blue-600 mt-12">
      <h2 className="text-2xl font-bold">Ready to Improve Your Interview Skills?</h2>
      <Link href="/dashboard">
          <Button className="mt-8 px-8 py-4 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition-all">
            Start Practicing Now
          </Button>
        </Link>
    </section>
    <footer className="w-full text-center py-6 bg-gray-800 mt-12">
        <p className="text-gray-400">Developed by Pratham, Palak, and Arpit in Feb 2025</p>
      </footer>


  </div>
  );
}