import React from 'react';

// Cute Fluffy Craft Bear Mascot (공방장 곰돌이)
export const MascotBear: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-300 ${className}`}
    >
      {/* Ears */}
      <circle cx="28" cy="34" r="18" fill="#C68B59" />
      <circle cx="28" cy="34" r="10" fill="#FCE7D2" />
      <circle cx="92" cy="34" r="18" fill="#C68B59" />
      <circle cx="92" cy="34" r="10" fill="#FCE7D2" />

      {/* Head */}
      <ellipse cx="60" cy="56" rx="42" ry="38" fill="#DDA16B" />
      
      {/* Cheeks Blushing */}
      <ellipse cx="32" cy="62" rx="7" ry="5" fill="#FFAAA6" opacity="0.65" />
      <ellipse cx="88" cy="62" rx="7" ry="5" fill="#FFAAA6" opacity="0.65" />

      {/* Eyes with sparkle */}
      <circle cx="43" cy="50" r="4.5" fill="#1E293B" />
      <circle cx="44.5" cy="48.5" r="1.5" fill="#FFFFFF" />
      <circle cx="77" cy="50" r="4.5" fill="#1E293B" />
      <circle cx="78.5" cy="48.5" r="1.5" fill="#FFFFFF" />

      {/* Snout */}
      <ellipse cx="60" cy="59" rx="15" ry="11" fill="#FFF2E2" />
      <ellipse cx="60" cy="55" rx="5" ry="3.5" fill="#2E4057" />
      {/* Smiling Mouth */}
      <path d="M56 61 Q60 65 64 61" stroke="#2E4057" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Body */}
      <ellipse cx="60" cy="98" rx="30" ry="22" fill="#DDA16B" />

      {/* Blue Apron */}
      <path d="M42 86 C42 86 48 83 60 83 C72 83 78 86 78 86 L80 108 C80 110 77 112 60 112 C43 112 40 110 40 108 Z" fill="#E0F2FE" stroke="#93C5FD" strokeWidth="1.5" />
      {/* Apron straps */}
      <line x1="45" y1="78" x2="48" y2="86" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="75" y1="78" x2="72" y2="86" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      {/* Apron mini pocket */}
      <rect x="52" y="93" width="16" height="12" rx="3" fill="#BAE6FD" stroke="#60A5FA" strokeWidth="1" />
      <path d="M57 91 L57 95 M63 91 L63 95" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tiny Paws holding mini rattan basket */}
      <ellipse cx="36" cy="88" rx="8" ry="7" fill="#C68B59" />
      <ellipse cx="84" cy="88" rx="8" ry="7" fill="#C68B59" />

      {/* Mini Rattan Basket in front */}
      <ellipse cx="60" cy="104" rx="14" ry="7" fill="#B27A4B" />
      <path d="M47 104 C47 114 73 114 73 104" fill="#C68B59" stroke="#8C5A32" strokeWidth="1.5" />
      {/* Basket Weave lines */}
      <path d="M51 106 Q60 110 69 106" stroke="#FAF0E6" strokeWidth="1" fill="none" />
      {/* Tiny Blue Daisy in Basket */}
      <circle cx="60" cy="102" r="3" fill="#FDE047" />
      <circle cx="57" cy="100" r="2" fill="#60A5FA" />
      <circle cx="63" cy="100" r="2" fill="#60A5FA" />
    </svg>
  );
};

// Cute Basket Kitten Mascot (바구니 속 아기 고양이)
export const MascotKitten: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-300 ${className}`}
    >
      {/* Kitten Ears */}
      <path d="M30 46 L24 24 L48 38 Z" fill="#F0F9FF" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M32 42 L28 29 L44 38 Z" fill="#BAE6FD" />
      <path d="M90 46 L96 24 L72 38 Z" fill="#F0F9FF" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M88 42 L92 29 L76 38 Z" fill="#BAE6FD" />

      {/* Kitten Head */}
      <ellipse cx="60" cy="52" rx="38" ry="32" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />

      {/* Cute Patch on ear/eye */}
      <path d="M72 34 C82 36 94 44 92 56 C90 62 82 60 76 54 Z" fill="#93C5FD" opacity="0.35" />

      {/* Blushing Cheeks */}
      <ellipse cx="36" cy="58" rx="6" ry="4" fill="#FFAAA6" opacity="0.7" />
      <ellipse cx="84" cy="58" rx="6" ry="4" fill="#FFAAA6" opacity="0.7" />

      {/* Happy Cat Curved Eyes */}
      <path d="M40 48 Q46 42 50 48" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M70 48 Q74 42 80 48" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Tiny Pink Nose & Mouth */}
      <polygon points="60,54 58,52 62,52" fill="#38BDF8" />
      <path d="M57 56 Q60 59 63 56" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Whiskers */}
      <line x1="26" y1="54" x2="36" y2="55" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="60" x2="35" y2="58" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="94" y1="54" x2="84" y2="55" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="95" y1="60" x2="85" y2="58" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Cute White Paws over basket edge */}
      <ellipse cx="46" cy="74" rx="7" ry="5" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
      <ellipse cx="74" cy="74" rx="7" ry="5" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />

      {/* Round Basket with Sky Blue Accent */}
      <ellipse cx="60" cy="76" rx="46" ry="12" fill="#38BDF8" />
      <path d="M14 76 C14 104 106 104 106 76" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
      
      {/* Basket Woven Patterns */}
      <path d="M22 84 Q60 92 98 84" stroke="#E0F2FE" strokeWidth="2" strokeDasharray="4 3" fill="none" />
      <path d="M28 92 Q60 98 92 92" stroke="#BAE6FD" strokeWidth="1.5" fill="none" />
    </svg>
  );
};

// Cute Craft Bunny Mascot (꼼꼼이 토끼)
export const MascotBunny: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-300 ${className}`}
    >
      {/* Long Bunny Ears */}
      <ellipse cx="40" cy="26" rx="11" ry="24" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" transform="rotate(-6 40 26)" />
      <ellipse cx="40" cy="27" rx="6" ry="17" fill="#BAE6FD" transform="rotate(-6 40 27)" />
      
      <ellipse cx="80" cy="26" rx="11" ry="24" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" transform="rotate(6 80 26)" />
      <ellipse cx="80" cy="27" rx="6" ry="17" fill="#BAE6FD" transform="rotate(6 80 27)" />

      {/* Little Blue Ribbon on right ear */}
      <circle cx="72" cy="40" r="3.5" fill="#FDE047" />
      <circle cx="68" cy="38" r="2.5" fill="#38BDF8" />
      <circle cx="76" cy="38" r="2.5" fill="#38BDF8" />
      <circle cx="72" cy="35" r="2.5" fill="#38BDF8" />

      {/* Bunny Head */}
      <ellipse cx="60" cy="62" rx="36" ry="30" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />

      {/* Cheeks */}
      <ellipse cx="36" cy="68" rx="6" ry="4" fill="#FFAAA6" opacity="0.8" />
      <ellipse cx="84" cy="68" rx="6" ry="4" fill="#FFAAA6" opacity="0.8" />

      {/* Twinkling big eyes */}
      <circle cx="44" cy="58" r="4.5" fill="#1E293B" />
      <circle cx="46" cy="56" r="1.8" fill="#FFFFFF" />
      <circle cx="76" cy="58" r="4.5" fill="#1E293B" />
      <circle cx="78" cy="56" r="1.8" fill="#FFFFFF" />

      {/* Tiny heart nose & mouth */}
      <path d="M58 64 Q60 62 62 64 Q60 67 58 64 Z" fill="#38BDF8" />
      <path d="M57 66 Q60 69 63 66" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Body */}
      <ellipse cx="60" cy="98" rx="26" ry="20" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
      <ellipse cx="60" cy="99" rx="16" ry="13" fill="#E0F2FE" />

      {/* Holding Blue Tape Measure */}
      <ellipse cx="44" cy="90" rx="6" ry="5" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
      <ellipse cx="76" cy="90" rx="6" ry="5" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
      <path d="M42 90 Q60 97 78 90" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M48 91 L48 94 M54 92 L54 95 M60 93 L60 96 M66 92 L66 95 M72 91 L72 94" stroke="#0369A1" strokeWidth="1" />
    </svg>
  );
};
