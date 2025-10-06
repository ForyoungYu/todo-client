import {Button} from "@/components/ui/button";
import Link from "next/link";
import SignIn from "@/components/sign-in";
import {cn} from "@/lib/utils";

export default function Home() {
  return (
    <>
      <header>
        <div className="fixed w-full flex justify-between p-4 border-b-1">
          <div className="p-1">Todo List App</div>
          <div className="flex gap-2">
            <Button variant="secondary" className="cursor-pointer" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="cursor-pointer" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col justify-center items-center h-screen px-4">
          <div
            className={cn(
              "font-bold text-6xl", // 添加字体大小样式
              "md:text-7xl lg:text-8xl",
              "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in"
            )}
          >
            Todo List
          </div>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 text-center max-w-2xl animate-fade-in-up">
            简单高效的待办事项管理工具，助你轻松规划每一天
          </p>
          <div className="mt-10 flex gap-4 animate-fade-in-up delay-200">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              开始使用
            </Button>
            <Button size="lg" variant="outline">
              了解更多
            </Button>
          </div>
        </div>
      </main>
      <footer className="bottom-0 w-full bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Todo List App. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
