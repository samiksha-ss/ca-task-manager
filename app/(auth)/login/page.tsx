"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      router.push("/")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center gap-6 bg-slate-50 px-4 py-8 dark:bg-slate-950">
      <Card className="w-full max-w-md space-y-6 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
            Nexa Studio
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Welcome back</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Sign in to manage your workspace, tasks, and reports with a single dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <label className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            Email
            <Input
              type="email"
              placeholder="olivia@nexa.studio"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            Password
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <Button type="submit" size="lg" className="w-full">
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          Need an admin account?{" "}
          <Link href="/(auth)/signup" className="font-semibold text-accent">
            Create one
          </Link>
        </p>
      </Card>
    </div>
  )
}
