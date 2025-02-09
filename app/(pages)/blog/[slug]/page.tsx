import { getPostData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  console.log(slug);

  const post = getPostData(slug);
  console.log(post);

  return (
    <section>
      <h1>{post.title}</h1>
      <ReactMarkdown
        components={{
          h1: (props) => <h1 className="text-4xl text-red-400" {...props} />,
        }}
      >
        {post.content}
      </ReactMarkdown>
    </section>
  );
};

export default Page;
// const Page = async ({ params }: PageProps) => {
//   const { slug } = await params;
//   const PAYLOAD_URL = process.env.PAYLOAD_URL;
//   const data = await getBlog(slug);

//   return (
//     <section className="blog mt-6 max-w-2xl flex flex-col justify-center mx-auto">
//       <h1 className="text-3xl mb-6 font-bold">{data.docs[0].title}</h1>

//       {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         data.docs[0].content.map((el: any) => {
//           switch (el.type) {
//             case "editor":
//               return (
//                 <RichText
//                   key={el.id}
//                   className="flex flex-col gap-4 text-justify"
//                   data={el.editor}
//                 />
//               );
//             case "text":
//               return <p key={el.id}>{el.text}</p>;
//             case "image":
//               return (
//                 <Image
//                   key={el.id}
//                   src={`${PAYLOAD_URL}${el.image.url}`}
//                   alt={el.image.alt}
//                   height={el.image.height}
//                   width={el.image.width}
//                 />
//               );
//           }
//         })
//       }
//     </section>
//   );
// };

// export default Page;
