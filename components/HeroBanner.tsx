"use client"

import { Image } from "@nextui-org/react"
import banner from "@/public/banner.png"
import clsx from "clsx"
import { motion } from "framer-motion"

export const HeroBanner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={clsx(className, "sm:relative flex flex-col")} {...props}>
    <motion.div
      className="sm:absolute sm:top-0 sm:left-0 sm:z-20 sm-w-auto bg-white rounded-full rounded-br-none py-4 px-8 text-black shadow-2xl mb-6"
      animate={{ y: [0, 10, 0] }}
      transition={{ y: { duration: 2, repeat: Infinity } }}
    >
      <p className="font-mono font-bold text-2xl">mathieu_brochard</p>

      <p className="font-mono text-md">AWS Solutions Architect</p>
    </motion.div>

    <Image src={banner.src} className="object-contain max-h-96 sm:z-10" />
  </div>
)
