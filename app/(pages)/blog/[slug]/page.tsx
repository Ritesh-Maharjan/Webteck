import React from "react";
import getBlog from "./action";
import RichText from "../../../_component/richtext";
import Image from "next/image";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const data = await getBlog(slug);

  console.log(data.docs);

  return (
    <section>
      <h1>{data.docs[0].title}</h1>

      {data.docs[0].content.map((el) => {
        switch (el.type) {
          case "editor":
            return (
              <RichText
                key={el.id}
                className="flex flex-col gap-4"
                content={el.editor}
              />
            );
          case "text":
            return <p key={el.id}>{el.text}</p>;
          case "image":
            return (
              <Image
                key={el.id}
                src={`http://localhost:3000${el.image.url}`}
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
