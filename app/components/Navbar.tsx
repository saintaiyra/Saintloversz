export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-8">
      <span>SAINT LOVERS</span>

      <div className="flex gap-6 text-sm">
        <a
          href="https://letterboxd.com/saintknowlove/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FILMS
        </a>

        <a
          href="https://soundcloud.com/ssaintaiyra0666"
          target="_blank"
          rel="noopener noreferrer"
        >
          MUSIC
        </a>

        <a
          href="https://www.youtube.com/@SaintAiyra"
          target="_blank"
          rel="noopener noreferrer"
        >
          EDITS
        </a>

        <a
          href="https://github.com/saintaiyra"
          target="_blank"
          rel="noopener noreferrer"
        >
          CODE
        </a>
      </div>
    </nav>
  );
}