import React from 'react';

function Head() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/tomplate.svg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Blog List</h1>
          <p className="text-sm mt-2">
            <span className="text-gray-200">Home </span>
            <span className="text-orange-500">&gt; Blog</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Head;
