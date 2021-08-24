import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid";
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
    {/* Left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>


      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full
                           hover:bg-gray-100 cursor-pointer"/>

        {/* Avatar */}
        <Avatar url="https://thecoinshark.net/uploads/750x500/2021/08/nft-from-cryptopunk-collection-was-mistakenly-sold-for-less-than-0.01.jpg"/>
      </div>
    </header>

    {/* Body */}
    <form>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbu6Bz1yYY16SfcSCQCIp6v1wOUzUH8pA_vrWQBwZc4vCxtffj0FeTr987wN8BZeoFjUM&usqp=CAU" 
                  height={100}
                  width={300}/>
      <div>
        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        <input type="text" className="bg-red-500 focus:outline-none" />
      </div>
    </form>

    {/* Footer */}


    </div>
  )
}
