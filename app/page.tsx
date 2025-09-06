import { FinancialChatbot } from "@/components/financial-chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Financial Services Assistant</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant answers to your banking, loan, and financial security questions. Ask about phishing scams,
            credit terms, or online banking safety.
          </p>
        </div>
        <FinancialChatbot />
      </div>
    </main>
  )
}
