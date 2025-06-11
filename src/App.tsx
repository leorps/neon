import React, { useState } from 'react';
import { Sparkles, Type, Frame, DollarSign, Home, Cloud, Square, ChevronDown, ChevronUp, Image } from 'lucide-react';

// Import all fonts
import '@fontsource/pacifico';
import '@fontsource/dancing-script';
import '@fontsource/abril-fatface';
import '@fontsource/amatic-sc';
import '@fontsource/bebas-neue';
import '@fontsource/caveat';
import '@fontsource/comfortaa';
import '@fontsource/great-vibes';
import '@fontsource/lobster';
import '@fontsource/monoton';
import '@fontsource/permanent-marker';
import '@fontsource/playfair-display';
import '@fontsource/righteous';
import '@fontsource/roboto';
import '@fontsource/sacramento';
import '@fontsource/satisfy';

const BACKGROUNDS = [
  {
    name: 'Modern Living Room',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
    style: 'modern'
  },
  {
    name: 'Industrial Brick Wall',
    url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
    style: 'industrial'
  },
  {
    name: 'Cozy Bedroom',
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    style: 'cozy'
  },
  {
    name: 'Minimalist Office',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    style: 'minimal'
  },
  {
    name: 'Restaurant Bar',
    url: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2',
    style: 'bar'
  },
  {
    name: 'Urban Cafe',
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    style: 'cafe'
  }
];

const FONTS = [
  { name: 'Abril Fatface', value: 'Abril Fatface', style: 'elegant' },
  { name: 'Amatic SC', value: 'Amatic SC', style: 'handwritten' },
  { name: 'Bebas Neue', value: 'Bebas Neue', style: 'display' },
  { name: 'Caveat', value: 'Caveat', style: 'handwritten' },
  { name: 'Comfortaa', value: 'Comfortaa', style: 'display' },
  { name: 'Dancing Script', value: 'Dancing Script', style: 'handwritten' },
  { name: 'Great Vibes', value: 'Great Vibes', style: 'elegant' },
  { name: 'Lobster', value: 'Lobster', style: 'display' },
  { name: 'Monoton', value: 'Monoton', style: 'display' },
  { name: 'Pacifico', value: 'Pacifico', style: 'handwritten' },
  { name: 'Permanent Marker', value: 'Permanent Marker', style: 'handwritten' },
  { name: 'Playfair Display', value: 'Playfair Display', style: 'elegant' },
  { name: 'Righteous', value: 'Righteous', style: 'display' },
  { name: 'Roboto', value: 'Roboto', style: 'sans-serif' },
  { name: 'Sacramento', value: 'Sacramento', style: 'handwritten' },
  { name: 'Satisfy', value: 'Satisfy', style: 'handwritten' }
];

interface AccordionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function Accordion({ title, icon, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

interface NeonTextProps {
  text: string;
  color: string;
  fontSize: number;
  font: string;
  backboardStyle: string;
  backboardColor: string;
}

function NeonText({ text, color, fontSize, font, backboardStyle, backboardColor }: NeonTextProps) {
  const getBackboardStyles = () => {
    const baseStyles = {
      padding: '40px',
      borderRadius: backboardStyle === 'Rectangle' ? '8px' : '0px',
      backgroundColor: backboardColor === 'clear' ? 'transparent' : backboardColor,
      boxShadow: backboardColor !== 'clear' ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none',
      backdropFilter: backboardColor === 'clear' ? 'blur(5px)' : 'none',
      border: backboardColor === 'clear' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    };

    if (backboardStyle === 'Cut-To-Letter') {
      return {
        ...baseStyles,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      };
    }

    return baseStyles;
  };

  const getColorBrightness = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const brightness = getColorBrightness(color);
  const glowIntensity = brightness > 128 ? 0.6 : 0.8;

  return (
    <div 
      className="relative p-8 rounded-2xl backdrop-blur-sm"
      style={{ 
        background: 'rgba(0, 0, 0, 0.3)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        transform: 'perspective(1000px) rotateX(5deg)',
        minHeight: '400px',
        minWidth: '600px',
      }}
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33 0%, transparent 70%)`,
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />

      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
          mixBlendMode: 'overlay',
        }}
      />

      <div 
        className="relative"
        style={getBackboardStyles()}
      >
        <div 
          className="flex items-center justify-center h-full transform"
          style={{
            fontFamily: font,
            fontSize: `${fontSize}px`,
            color: color,
            textShadow: `
              0 0 7px ${color}99,
              0 0 10px ${color}99,
              0 0 ${21 * glowIntensity}px ${color}66,
              0 0 ${42 * glowIntensity}px ${color}66,
              0 0 ${62 * glowIntensity}px ${color}33,
              0 0 ${72 * glowIntensity}px ${color}33
            `,
            animation: 'neonPulse 2s infinite alternate',
            mixBlendMode: 'screen',
          }}
        >
          {text || 'Type something...'}
        </div>
      </div>

      <div 
        className="absolute -bottom-4 left-0 right-0 h-20 opacity-30"
        style={{
          background: `linear-gradient(to bottom, ${color}22, transparent)`,
          filter: 'blur(10px)',
          transform: 'scaleY(-1) perspective(500px) rotateX(60deg)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}

const COLORS = {
  'Warm White': '#fffdd0',
  'White': '#ffffff',
  'Lemon Yellow': '#fff44f',
  'Golden Yellow': '#ffb700',
  'Orange': '#ff7f00',
  'Light Red': '#ff6b6b',
  'Red': '#ff0000',
  'Pink': '#ff69b4',
  'Cotton Candy': '#ffb7c5',
  'Deep Pink': '#ff1493',
  'Purple': '#800080',
  'Deep Blue': '#0000ff',
  'Electric Blue': '#00ffff',
  'Ice Blue': '#a5f2f3',
  'Tropical Blue': '#00c3ff',
  'Mint': '#98ff98',
  'Green': '#00ff00',
  'Deep Green': '#008000'
};

const SIZES = [
  { name: 'Mini', length: '16.5"', price: 84 },
  { name: 'Extra Small', length: '20"', price: 95 },
  { name: 'Small', length: '25"', price: 118 },
  { name: 'Medium', length: '30"', price: 134, popular: true },
  { name: 'Large', length: '38"', price: 170 },
  { name: 'X Large', length: '48"', price: 180 },
  { name: 'XX Large', length: '64"', price: 211 },
  { name: 'Supersized', length: '85"', price: 281 }
];

const BACKBOARD_STYLES = [
  { name: 'Cut Around', price: 0 },
  { name: 'Rectangle', price: 0 },
  { name: 'Cut-To-Letter', price: 24 },
  { name: 'Naked Neon', price: 40 },
  { name: 'Acrylic Stand', price: 40 },
  { name: 'Open Box', price: 72 }
];

const BACKBOARD_COLORS = [
  { name: 'Standard clear acrylic', value: 'clear', price: 0 },
  { name: 'Glossy White acrylic', value: '#ffffff', price: 10 },
  { name: 'Glossy Black acrylic', value: '#000000', price: 10 },
  { name: 'Silver acrylic', value: '#c0c0c0', price: 20 }
];

function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ff69b4');
  const [selectedSize, setSelectedSize] = useState(SIZES[3]);
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [backboardStyle, setBackboardStyle] = useState(BACKBOARD_STYLES[0].name);
  const [backboardColor, setBackboardColor] = useState(BACKBOARD_COLORS[0].value);
  const [font, setFont] = useState('Pacifico');
  const [fontFilter, setFontFilter] = useState('all');
  const [selectedBackground, setSelectedBackground] = useState<string | null>(null);

  const filteredFonts = fontFilter === 'all' 
    ? FONTS 
    : FONTS.filter(f => f.style === fontFilter);

  const calculatePrice = () => {
    let total = selectedSize.price;
    if (isOutdoor) total += 54;
    const selectedStyle = BACKBOARD_STYLES.find(style => style.name === backboardStyle);
    if (selectedStyle) total += selectedStyle.price;
    const selectedColorOption = BACKBOARD_COLORS.find(color => color.value === backboardColor);
    if (selectedColorOption) total += selectedColorOption.price;
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex h-screen">
        <div className="w-[70%] bg-[#111111] p-8 flex flex-col">
          <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-white">
            <Sparkles className="w-8 h-8" />
            Custom Neon Sign Builder
          </h1>
          <div 
            className="flex-1 flex items-center justify-center relative"
            style={{
              background: selectedBackground ? `url(${selectedBackground}) center/cover` : undefined,
              borderRadius: '1rem',
              transition: 'background-image 0.3s ease',
              boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <NeonText 
              text={text} 
              color={color} 
              fontSize={72} 
              font={font}
              backboardStyle={backboardStyle}
              backboardColor={backboardColor}
            />
          </div>
          
          <div className="mt-8">
            <h2 className="text-white text-xl mb-4 flex items-center gap-2">
              <Image className="w-5 h-5" />
              Preview Backgrounds
            </h2>
            <div className="grid grid-cols-6 gap-4">
              <button
                onClick={() => setSelectedBackground(null)}
                className={`relative h-20 rounded-lg overflow-hidden border-2 ${
                  selectedBackground === null ? 'border-blue-500' : 'border-transparent'
                }`}
                style={{ background: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)' }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  None
                </span>
              </button>
              {BACKGROUNDS.map((bg) => (
                <button
                  key={bg.name}
                  onClick={() => setSelectedBackground(bg.url)}
                  className={`relative h-20 rounded-lg overflow-hidden border-2 ${
                    selectedBackground === bg.url ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={bg.url} 
                    alt={bg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-xs text-center px-2">
                      {bg.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[30%] overflow-y-auto bg-white">
          <div className="p-6 space-y-4">
            <Accordion title="Text" icon={<Type className="w-5 h-5" />}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                rows={2}
              />
              <div className="mt-4 space-y-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontFilter('all')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      fontFilter === 'all' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFontFilter('handwritten')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      fontFilter === 'handwritten' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Handwritten
                  </button>
                  <button
                    onClick={() => setFontFilter('display')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      fontFilter === 'display' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Display
                  </button>
                  <button
                    onClick={() => setFontFilter('elegant')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      fontFilter === 'elegant' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    Elegant
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                  {filteredFonts.map((fontOption) => (
                    <button
                      key={fontOption.value}
                      onClick={() => setFont(fontOption.value)}
                      className={`p-3 text-left border rounded-lg ${
                        font === fontOption.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: fontOption.value }}
                    >
                      <span className="text-lg">{fontOption.name}</span>
                      <div className="text-sm text-gray-500 font-normal" style={{ fontFamily: 'system-ui' }}>
                        {fontOption.style.charAt(0).toUpperCase() + fontOption.style.slice(1)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Accordion>

            <Accordion title="Color">
              <div className="grid grid-cols-6 gap-2">
                {Object.entries(COLORS).map(([name, value]) => (
                  <button
                    key={name}
                    onClick={() => setColor(value)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      color === value ? 'border-blue-500' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: value }}
                    title={name}
                  />
                ))}
              </div>
            </Accordion>

            <Accordion title="Size" icon={<Frame className="w-5 h-5" />}>
              <div className="grid grid-cols-1 gap-4">
                {SIZES.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 border rounded-lg relative ${
                      selectedSize.name === size.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    {size.popular && (
                      <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <div className="font-medium">{size.name}</div>
                    <div className="text-sm text-gray-500">Length: {size.length}</div>
                    <div className="text-lg font-bold mt-1">${size.price}</div>
                  </button>
                ))}
              </div>
            </Accordion>

            <Accordion title="Location" icon={<Home className="w-5 h-5" />}>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => setIsOutdoor(false)}
                  className={`p-4 border rounded-lg ${
                    !isOutdoor ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <Home className="w-6 h-6 mb-2" />
                  <div className="font-medium">Indoor</div>
                </button>
                <button
                  onClick={() => setIsOutdoor(true)}
                  className={`p-4 border rounded-lg ${
                    isOutdoor ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <Cloud className="w-6 h-6 mb-2" />
                  <div className="font-medium">Outdoor (+$54)</div>
                </button>
              </div>
            </Accordion>

            <Accordion title="Backboard Style" icon={<Square className="w-5 h-5" />}>
              <div className="grid grid-cols-1 gap-4">
                {BACKBOARD_STYLES.map((style) => (
                  <button
                    key={style.name}
                    onClick={() => setBackboardStyle(style.name)}
                    className={`p-4 border rounded-lg ${
                      backboardStyle === style.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="font-medium">{style.name}</div>
                    <div className="text-sm text-gray-500">
                      {style.price === 0 ? 'FREE' : `+$${style.price}`}
                    </div>
                  </button>
                ))}
              </div>
            </Accordion>

            <Accordion title="Backboard Color">
              <div className="grid grid-cols-1 gap-4">
                {BACKBOARD_COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setBackboardColor(color.value)}
                    className={`p-4 border rounded-lg ${
                      backboardColor === color.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full mx-auto mb-2"
                         style={{ backgroundColor: color.value === 'clear' ? '#f0f0f0' : color.value }} />
                    <div className="font-medium">{color.name}</div>
                    <div className="text-sm text-gray-500">
                      {color.price === 0 ? 'FREE' : `+$${color.price}`}
                    </div>
                  </button>
                ))}
              </div>
            </Accordion>

            <div className="sticky bottom-0 bg-white p-4 border-t">
              <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    <span className="text-xl font-medium">Total Price</span>
                  </div>
                  <span className="text-3xl font-bold">${calculatePrice()}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;