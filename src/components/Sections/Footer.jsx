import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-800 mt-5 rounded-xl text-zinc-300 py-4">
      <div className="container mx-auto flex flex-col justify-between items-center px-4">
        <h2 className="text-base font-semibold text-white">
          Made with love ❤️
        </h2>
        <p className="text-xs">© 2024 EMS Corp. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer