export default function MobileBanner() {
  return (
    <div
      className="
    w-[100%] 
    flex 
    flex-1
     relative 
     "
    >
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="w-[33.33%] h-[320px] relative overflow-hidden
          [mask-image:linear-gradient(to_top,transparent,black_120px)]
                    [-webkit-mask-image:linear-gradient(to_top,transparent,black_120px)]
          "
        >
          <img
            className="
                    w-[100%] 
                    h-[100%] 
                    object-cover                    
                    "
            src={`/assets/images/slide/${item}.png`}
            alt="img"
          />
        </div>
      ))}
    </div>
  );
}
