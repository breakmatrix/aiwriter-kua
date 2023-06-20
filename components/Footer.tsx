import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'

export default function Footer() {
  const { locale, locales, defaultLocale } = useRouter()

  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-center items-center px-3 space-y-3 sm:mb-0 mb-3">

      
      <div className="display: flex  flex: 1 padding: 0 0rem 2rem 0  border-top: 1px solid #eaeaea  justify-center items-center ">

        <a
          href="https://github.com/breakmatrix/prompt-engineering/wiki/%E4%BA%BA%E4%BA%BA%E9%83%BD%E8%83%BD%E5%AD%A6%E7%9A%84%E6%8F%90%E7%A4%BA%E5%B7%A5%E7%A8%8B%E5%85%A5%E9%97%A8"
          target="_blank"
          rel="noopener "
          className=" hover:underline transition underline-offset-2"
        >
          人人都能学的提示工程入门{" "}
        </a>
        
        &nbsp;&nbsp;&nbsp;

        <a
          href="https://chatgpt123.com/?utm_source=aigenprompt"
          target="_blank"
          rel="noopener "
          className=" hover:underline transition underline-offset-2"
        >
          ChatGPT资源导航站{" "}
        </a>
      
        &nbsp;&nbsp;&nbsp;

        <span className="text-medium font-normal">意见反馈请加微信“unique3412”</span>

        &nbsp;&nbsp;&nbsp;

      </div>
      

    </footer>
  );
}
