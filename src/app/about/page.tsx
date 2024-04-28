import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <h1 className="flex justify-center pt-1.5 text-4xl font-extrabold tracking-tight lg:pt-4 lg:text-5xl">
        About me
      </h1>
      <div className="flex flex-col gap-6 px-2 py-10 leading-7">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
        <p>
          Maecenas eleifend tristique vestibulum. Pellentesque in laoreet magna.
          In tempus odio eget posuere venenatis.
        </p>{" "}
        <p>
          Aenean tempus ante id purus fringilla facilisis. Aliquam egestas
          molestie ultricies. Praesent a faucibus nisi. Proin efficitur bibendum
          lacus eu tristique. Quisque auctor mollis dolor, tristique posuere
          odio placerat ut. Nam nunc elit, maximus ac diam mattis, scelerisque
          sollicitudin arcu. Sed in erat mauris.
        </p>
      </div>
    </>
  );
}
