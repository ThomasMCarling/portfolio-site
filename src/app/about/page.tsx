import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <div className="flex sm:justify-center ">
        <h1 className="w-[16.75rem] text-4xl font-extrabold tracking-tight lg:w-[22.5rem] lg:text-5xl">
          About me
        </h1>
      </div>
      <div className="flex flex-col gap-6 px-2 pb-1 pt-10 leading-7">
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
