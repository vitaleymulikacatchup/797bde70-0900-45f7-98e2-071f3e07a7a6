import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Llama Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Cloud */}
              <ellipse cx="100" cy="160" rx="60" ry="25" fill="#f3f4f6" stroke="#000" strokeWidth="2"/>
              
              {/* Llama Body */}
              <ellipse cx="100" cy="120" rx="35" ry="45" fill="white" stroke="#000" strokeWidth="2"/>
              
              {/* Llama Head */}
              <ellipse cx="100" cy="75" rx="25" ry="30" fill="white" stroke="#000" strokeWidth="2"/>
              
              {/* Ears */}
              <ellipse cx="85" cy="55" rx="8" ry="15" fill="white" stroke="#000" strokeWidth="2" transform="rotate(-20 85 55)"/>
              <ellipse cx="115" cy="55" rx="8" ry="15" fill="white" stroke="#000" strokeWidth="2" transform="rotate(20 115 55)"/>
              
              {/* VR Headset */}
              <rect x="75" y="65" width="50" height="20" rx="10" fill="#374151" stroke="#000" strokeWidth="2"/>
              <circle cx="90" cy="75" r="8" fill="#6b7280" stroke="#000" strokeWidth="1"/>
              <circle cx="110" cy="75" r="8" fill="#6b7280" stroke="#000" strokeWidth="1"/>
              
              {/* Headset Strap */}
              <path d="M75 75 Q100 45 125 75" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M75 75 Q100 105 125 75" stroke="#000" strokeWidth="2" fill="none"/>
              
              {/* Nose */}
              <ellipse cx="100" cy="85" rx="4" ry="6" fill="white" stroke="#000" strokeWidth="1"/>
              
              {/* Arms */}
              <ellipse cx="70" cy="100" rx="12" ry="25" fill="white" stroke="#000" strokeWidth="2" transform="rotate(-30 70 100)"/>
              <ellipse cx="130" cy="100" rx="12" ry="25" fill="white" stroke="#000" strokeWidth="2" transform="rotate(30 130 100)"/>
              
              {/* Legs */}
              <ellipse cx="85" cy="150" rx="8" ry="20" fill="white" stroke="#000" strokeWidth="2"/>
              <ellipse cx="115" cy="150" rx="8" ry="20" fill="white" stroke="#000" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Cloud Models Notice */}
        <p className="text-sm text-muted-foreground mb-8">
          <Link href="/cloud" className="underline hover:no-underline">
            Cloud models are now available in Ollama
          </Link>
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          Chat & build with<br />
          open models
        </h1>

        {/* Download Button */}
        <div className="mb-6">
          <Link href="/download" className="btn-primary text-lg px-8 py-4">
            Download
          </Link>
        </div>

        {/* Platform Availability */}
        <p className="text-sm text-muted-foreground">
          Available for macOS,<br />
          Windows, and Linux
        </p>
      </div>
    </section>
  )
}