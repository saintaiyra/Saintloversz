export default function Music() {
  return (
    <section
      id="music"
      className="min-h-screen bg-[#7C3AED] px-8 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-black tracking-[0.7em]">
          Playlist
        </p>

        <h2 className="mb-16 text-5xl text-black md:text-5xl">
          COLD NIGHT.
        </h2>

        <iframe
          src="https://open.spotify.com/embed/playlist/7J3hRpEYuvTjOebLlNKF46"
          width="100%"
          height="500"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full"
        />
      </div>
    </section>
  );
}