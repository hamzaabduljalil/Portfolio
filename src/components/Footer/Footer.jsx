export default function Footer(props) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow">{props.children}</div>

      <footer className="bg-footer-100 text-white py-3 px-4 text-center mt-7">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[19px] font-semibold">
            Hamza, {new Date().getFullYear() - 2004} years old
          </h2>
          <p className="text-gray-300 mt-2 italic">
            "Creating with passion, growing with purpose."
          </p>

          <p className="text-gray-500 text-sm mt-3">
            © {new Date().getFullYear()} Hamza Abduljalil. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
