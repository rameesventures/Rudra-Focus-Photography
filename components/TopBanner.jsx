
const TopBanner = () => {
  const bannerItems = [
    "4+ Years of Capturing Beautiful Moments",
    "Weddings · Pre-Weddings · Candid Stories",
    "Love Stories · Real Emotions · Timeless Memories",
    "Thoothukudi · Tamil Nadu · Destination Weddings",
    "Every Frame Holds a Beautiful Memory",
    "Your Story · Our Lens · Forever Preserved",
  ];

  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden border-b border-[#C89B5D]/20 bg-primary text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...bannerItems, ...bannerItems].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="px-6 py-2.5 text-[10px] font-medium sm:text-xs ">
              {item}
            </span>

            <span
              className="text-[10px] text-black"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
