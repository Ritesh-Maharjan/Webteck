import React from "react";
import getBlog from "./action";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const PAYLOAD_URL = process.env.PAYLOAD_URL;

  const data = await getBlog(slug);
  // console.log(data.docs[0].content)

  console.log(PAYLOAD_URL);
  return (
    <section className="blog mt-6 max-w-2xl flex flex-col justify-center mx-auto">
      <h1 className="text-3xl mb-6 font-bold">{data.docs[0].title}</h1>

      {data.docs[0].content.map((el) => {
        switch (el.type) {
          case "editor":
            return (
              <RichText
                key={el.id}
                className="flex flex-col gap-4 text-justify"
                data={el.editor}
              />
            );
          case "text":
            return <p key={el.id}>{el.text}</p>;
          case "image":
            return (
              <Image
                key={el.id}
                src={`${PAYLOAD_URL}${el.image.url}`}
                alt={el.image.alt}
                height={el.image.height}
                width={el.image.width}
              />
            );
        }
      })}
    </section>
  );
};

export default Page;
