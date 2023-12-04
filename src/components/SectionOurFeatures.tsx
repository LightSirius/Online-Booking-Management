import React, { FC } from "react";
import rightImgPng from "@/images/BecomeAnAuthorImg.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          서문
        </span>
        <h2 className="font-semibold text-4xl mt-5">티켓팅 서비스 메인 페이지 </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="블루 뱃지" />
            <span className="block text-xl font-semibold">
              Span to here
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              desc to here
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="그린 뱃지" />
            <span className="block text-xl font-semibold">
              Span to here
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              desc to here
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="레드 뱃지" />
            <span className="block text-xl font-semibold">
              Span to here
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              desc to here
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
