# PrepAI - AI-Powered Interview Preparation App

PrepAI is an AI-powered mock interview platform designed to help users practice and improve their interview skills through intelligent question generation and AI-driven feedback. Built with modern technologies, PrepAI provides a seamless and interactive experience, simulating real-world interview scenarios.

## 🚀 Features

### 🎯 AI-Powered Mock Interviews
- Uses **Gemini API** to generate intelligent interview questions tailored to the user's experience and job role.
- Provides AI-driven feedback on answers to help users improve their performance.

### 🏗️ Modern Tech Stack
- **Next.js & React.js** for a high-performance and interactive frontend.
- **Tailwind CSS** for a sleek, responsive, and modern UI.
- **JavaScript** for dynamic client-side functionality.
- **Drizzle ORM** for efficient and scalable database management.

### 🔒 Secure Authentication & User Management
- **Clerk Integration** for secure authentication and seamless user management.
- Supports social logins and email/password authentication for an enhanced user experience.

### 📊 Performance & Scalability
- Optimized database queries using **Drizzle ORM** for better efficiency.
- Built on **Next.js**, ensuring fast rendering and smooth navigation.

### 🎥 Real-World Interview Simulation
- Users can **record** and **review** their responses to mock interview questions.
- AI-generated feedback helps users identify strengths and areas for improvement.

### 📅 Personalized Interview Sessions
- Users can select their **job position**, **tech stack**, and **years of experience** to get customized interview questions.
- Interactive question flow with **previous**, **next**, and **end interview** options.

## 🛠️ Technologies Used
- **Frontend:** Next.js, React.js, Tailwind CSS, JavaScript
- **Backend & Database:** Drizzle ORM
- **AI Integration:** Gemini API
- **Authentication:** Clerk

## 🔧 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/prepai.git
   cd prepai
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env.local` file in the root directory and add:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   DATABASE_URL=your-database-url
   ```

### Running the App
To start the development server, run:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

### Deployment
PrepAI can be deployed on **Vercel** or any other hosting platform that supports Next.js.
```sh
vercel
```

## 📌 Roadmap
- ✅ AI-driven feedback on responses
- ✅ Real-time video/audio recording for better review
- ⏳ Multi-language support
- ⏳ Resume analysis and AI-based improvements

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License
This project is licensed under the MIT License.

---

### 💡 PrepAI: Your AI-Powered Interview Companion!
**Practice. Improve. Get Hired.**

