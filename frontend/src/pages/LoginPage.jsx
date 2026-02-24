import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {}
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Não tem conta?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Criar conta
          </span>
        </p>
      </div>
    </div>
  );
}